function button_navbar() {
  document.getElementById("navbar-wiki").style.display = "block";
};

function button_navbar_close() {
    document.getElementById("navbar-wiki").style.display = "none";
};

window.addEventListener('resize', function () {
    document.getElementById("navbar-wiki").style.display = "block";
}
);
if ($(window).width() < 960) {
  alert('Less than 960');
}
else {
  alert('More than 960');
}