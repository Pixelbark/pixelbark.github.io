document.addEventListener('DOMContentLoaded', function () {
  var splash = document.querySelector('.splash');
  var enterButton = document.querySelector('.text button');

  if (enterButton) {
    enterButton.addEventListener('click', function () {
      if (splash) {
        splash.style.display = 'none';
      }
    });
  }
});
