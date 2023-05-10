window.addEventListener('load', function () {
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 500);
});

window.addEventListener('load', function () {
  const boxShower = document.querySelectorAll('.box-shower');

  document.getElementById("button_search").addEventListener("click", function () {
    document.getElementById("search").style.display = "block";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
    setTimeout(function () {
      document.getElementById('searchbox').focus();
    }, 500);
  });

  document.getElementById("button_services").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "block";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  });

  document.getElementById("button_about").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "block";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  });

  document.getElementById("button_dotfiles").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "block";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  });

  document.getElementById("button_server").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "block";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "none";
  });

  document.getElementById("button_projects").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "block";
    document.getElementById("contact").style.display = "none";
  });

  document.getElementById("button_contact").addEventListener("click", function () {
    document.getElementById("search").style.display = "none";
    document.getElementById("services").style.display = "none";
    document.getElementById("about").style.display = "none";
    document.getElementById("dotfiles").style.display = "none";
    document.getElementById("server").style.display = "none";
    document.getElementById("projects").style.display = "none";
    document.getElementById("contact").style.display = "block";
  });
});