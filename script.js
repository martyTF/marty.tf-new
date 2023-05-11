window.addEventListener('load', function () {
  document.getElementById("search").style.display = "block";
  document.getElementById("search").style.animation = "appearright 0.5s ease";
  document.getElementById("services").style.display = "none";
  document.getElementById("about").style.display = "none";
  document.getElementById("dotfiles").style.display = "none";
  document.getElementById("server").style.display = "none";
  document.getElementById("projects").style.display = "none";
  document.getElementById("contact").style.display = "none";
  document.getElementById("mainmain").style.overflowX = "hidden";
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 500);
});


function button_search() {
  document.getElementById("search").style.display = "block";
  document.getElementById("search").style.animation = "appearright 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    document.getElementById('searchbox').focus();
  }, 500);
};

function button_services() {
  document.getElementById("services").style.display = "block";
  document.getElementById("services").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }, 500);
};

function button_about() {
  document.getElementById("about").style.display = "block";
  document.getElementById("about").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }, 500);
};

function button_dotfiles() {
  document.getElementById("dotfiles").style.display = "block";
  document.getElementById("dotfiles").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }, 500);
};

function button_server() {
  document.getElementById("server").style.display = "block";
  document.getElementById("server").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }, 500);
};

function button_projects() {
  document.getElementById("projects").style.display = "block";
  document.getElementById("projects").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  document.getElementById("contact").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("contact").style.display = "none";
  }, 500);
};

function button_contact() {
  document.getElementById("contact").style.display = "block";
  document.getElementById("contact").style.animation = "appearright 0.5s ease";
  document.getElementById("search").style.animation = "disappearleft 0.5s ease";
  document.getElementById("about").style.animation = "disappearleft 0.5s ease";
  document.getElementById("dotfiles").style.animation = "disappearleft 0.5s ease";
  document.getElementById("server").style.animation = "disappearleft 0.5s ease";
  document.getElementById("projects").style.animation = "disappearleft 0.5s ease";
  document.getElementById("services").style.animation = "disappearleft 0.5s ease";
  setTimeout(function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("services").style.display = "none";
  }, 500);
};