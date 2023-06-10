window.addEventListener('load', function () {
  var loadfunc = document.getElementsByClassName("box-shower");
  for (var i = 0; i < loadfunc.length; i++) {
    loadfunc[i].style.display = "none";
    document.getElementById("search").style.display = "block";
    document.getElementById("search").style.animation = "appearcontent 1s ease";
  };
  document.getElementById("searchfootnote").style.animation = "appearfooter 1s ease";
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 200);
});


function shiftcontent(content) {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 1s ease";
  };
  document.getElementById(content).style.display = "block";
  document.getElementById(content).style.animation = "appearcontent 1s ease";

  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 200);
  document.getElementById("searchfootnote").style.animation = "appearcontent 1s ease"

  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    };
    document.getElementById(content).style.display = "block";
  }, 1000);
};


function button_lightmode() {
  document.getElementById("darkmode").style.display = "inline";
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
  document.getElementById("lightmode").style.display = "inline";
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