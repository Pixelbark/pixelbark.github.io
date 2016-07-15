let includedStreams = ["SRKevo1", "SRKEvo2", "SRKEvo3", "SRKEvo4", "Numakie", "Tekken", "logichole", "jyosua", "TheBrett", "IPLAYWINNER", "teamsp00ky", "CAPCOMFIGHTERS", "Twitch", "LEVELUPLIVE", "SRKLIVE", "saltybet"];

function main() {
  for (let i = 0; i < includedStreams.length; i++) {
    let current = includedStreams[i];
    $.getJSON('https://api.twitch.tv/kraken/streams/' + includedStreams[i] + '?callback=?', function(data) {
      if (data.error) {
        $("#streamList").append('<div><button class="btn streamButton">>>No such channel, complain to the site owner.</button></div>');
      } else if (data.stream) {
        let name = data.stream.channel.display_name;
        let logo = data.stream.channel.logo
        name.toString();
        $("#streamList").append('<div class="online"><button class="btn btn-success streamButton" onclick="clicked(\''+name+'\')"><img width=42 class="pull-left" src="' + logo + '">' + name + ' - Now Playing: '+data.stream.game+'<img src="http://static-cdn.jtvnw.net/ttv-boxart/'+data.stream.game+'-340x396.jpg" class="pull-right" width=42></img><br>Current viewers: '+data.stream.viewers+'</button></div>')
      } else {
        $.getJSON(data._links.channel + "?callback=?", function(info) {
          $("#streamList").append('<div class="offline"><button class="btn btn-danger streamButton" onclick="clicked(\''+info.display_name+'\')"><img width=42 class="pull-left" src="' + info.logo + '">' + info.display_name + ' is offline</button></div>');
        });
      }
    });
  }
}

$(document).ready(function() {
  main();
})

function clicked(input){
  $("#twitchStream").empty();
  $("#twitchStream").append('<iframe src="http://player.twitch.tv/?channel='+input+'" height="720" width="1280" frameborder="0" scrolling="no" allowfullscreen="true"></iframe>');
  console.log("Changed to " + input);
}

$("#showall").click(function(){
  $(".online").show();
  $(".offline").show();
});

$("#showonline").click(function() {
  $(".online").show();
  $(".offline").hide();
});

$("#showoffline").click(function() {
  $("#streamList").empty();
  main();
});
