document.addEventListener('DOMContentLoaded', function () {

  document.getElementById("duration").onchange = function () {
    var select = document.getElementById("duration").value;
    var time   = document.getElementById("time");
    if (select==='2') {
      time.style.display    = 'flex';
      time.style.alignItems = 'center';
    } else {
      time.style.display = 'none';
    }
  }

  document.getElementById("open-menu").onclick = function () {
    var menu = document.getElementById("menu");
    menu.style.display = 'block';
  }

});