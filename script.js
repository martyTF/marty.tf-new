
function setCookie(cname, cvalue, exdays) {
  const d = new Date();
  d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
  let expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
};

function getCookie(cname) {
  let name = cname + "=";
  let decodedCookie = decodeURIComponent(document.cookie);
  let ca = decodedCookie.split(';');
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
};

window.addEventListener('load', function () {
  document.getElementById("search").style.display = "block";
  document.getElementById("search").style.animation = "appearcontent 1s ease";
  document.getElementById("searchfootnote").style.animation = "appearfooter 1s ease";
  setTimeout(function () {
    document.getElementById('searchbox').focus();
  }, 200);
  var darklight = getCookie("darklightc");
  if (darklight == 0) {
    button_lightmode();
  }
  else if (darklight == 1) {
    button_darkmode();
  }
  else {
    return "";
  }
});



function shiftcontent(content) {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++) {
    x[i].style.animation = "disappearcontent 1s ease";
  };
  document.getElementById(content).style.display = "block";
  document.getElementById(content).style.animation = "appearcontent 1s ease";
  setTimeout(function () {
    var x = document.getElementsByClassName("box-shower");
    for (var i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    };
    document.getElementById(content).style.display = "block";
  }, 500);
  if (content == "search") {
    setTimeout(function () {
      document.getElementById('searchbox').focus();
    }, 200);
    document.getElementById("searchfootnote").style.animation = "appearcontent 1s ease";
  } 
  else { 
    return ""; 
  }
};


function button_lightmode() {
  document.getElementById("darkmode").style.display = "inline";
  document.getElementById("lightmode").style.display = "none";
  document.body.style.setProperty('--mtf-background-color', "#f9f5d7");
  document.body.style.setProperty('--mtf-font-color', "#3c3836");
  document.body.style.setProperty('--mtf-background-2-color', "#fbf1c7");
  document.body.style.setProperty('--mtf-accent-color', "#689d6a");
  setCookie("darklightc", 0, 30)
};


function button_darkmode() {
  document.getElementById("darkmode").style.display = "none";
  document.getElementById("lightmode").style.display = "inline";
  document.body.style.setProperty('--mtf-background-color', "#1d1d1d");
  document.body.style.setProperty('--mtf-font-color', "#ebdbb2");
  document.body.style.setProperty('--mtf-background-2-color', "#282828");
  document.body.style.setProperty('--mtf-accent-color', "#689d6a");
  setCookie("darklightc", 1, 30);
}