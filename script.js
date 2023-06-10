window.addEventListener('load', function () {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("search").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 200);

  document.getElementById("darkmode").style.display = "none";
  document.getElementById("lightmode").style.display = "block";
});



function button_search() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("search").style.display = "block";
    document.getElementById("search").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("search").style.display = "block";
    };
    document.getElementById('searchbox').focus();
  }, 500);
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 200);
};

function button_services() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("services").style.display = "block";
    document.getElementById("services").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("services").style.display = "block";
    };
  }, 500);
};

function button_about() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("about").style.display = "block";
    document.getElementById("about").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("about").style.display = "block";
    };
  }, 500);
};

function button_dotfiles() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("dotfiles").style.display = "block";
    document.getElementById("dotfiles").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("dotfiles").style.display = "block";
    };
  }, 500);
};

function button_server() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("server").style.display = "block";
    document.getElementById("server").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("server").style.display = "block";
    };
  }, 500);
};

function button_projects() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("projects").style.display = "block";
    document.getElementById("projects").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("projects").style.display = "block";
    };
  }, 500);
};

function button_contact() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 0.5s ease";
    document.getElementById("contact").style.display = "block";
    document.getElementById("contact").style.animation = "appearcontent 0.5s ease";
  };
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
      document.getElementById("contact").style.display = "block";
    };
  }, 500);
};



function button_lightmode() {
  document.getElementById("darkmode").style.display = "block";
  document.getElementById("lightmode").style.display = "none";
  document.body.style.backgroundColor = "#f9f5d7";
  var fonts = document.getElementsByTagName("*");
  for (var i = 0, max = fonts.length; i < max; i++) {
    fonts[i].style.color = "#3c3836";
  };
  var boxes = document.getElementsByClassName("box");
  for (var i = 0, max = boxes.length; i < max; i++) {
    boxes[i].style.backgroundColor = "#fbf1c7"
  };
  var linkborders = document.getElementsByClassName("link");
  for (var i = 0, max = linkborders.length; i < max; i++) {
    linkborders[i].style.borderColor = "#fbf1c7";
  };
};


function button_darkmode() {
  document.getElementById("darkmode").style.display = "none";
  document.getElementById("lightmode").style.display = "block";
  document.body.style.backgroundColor = "#1d1d1d";
  var fonts = document.getElementsByTagName("*");
  for (var i = 0, max = fonts.length; i < max; i++) {
    fonts[i].style.color = "#ebdbb2";
  };
  var boxes = document.getElementsByClassName("box");
  for (var i = 0, max = boxes.length; i < max; i++) {
    boxes[i].style.backgroundColor = "#282828"
  };
  var linkborders = document.getElementsByClassName("link");
  for (var i = 0, max = linkborders.length; i < max; i++) {
    linkborders[i].style.borderColor = "#282828";
  };
};