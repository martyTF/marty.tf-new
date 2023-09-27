
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

function startup() {
  var x = document.getElementsByClassName("box-shower");
  for (var i = 0; i < x.length; i++)
    {
      x[i].style.height = "0px";
      x[i].style.overflow = "hidden";
    };
  var srch = document.getElementById("search");
  srch.style.height = "auto";
  srch.style.overflow = "auto";
  var srchh = srch.offsetHeight;
  var srchh = srchh + "px";
  srch.style.height = srchh;
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
};



function shiftcontent(content) {
  var x = document.getElementsByClassName("box-shower");
  var cont = document.getElementById(content);
  cont.style.height = "auto";
  var contheight = cont.offsetHeight;
  cont.style.height = "0px";
  for (var i = 0; i < x.length; i++)
  {
    x[i].style.height = "0px";
    x[i].style.overflow = "hidden";
  };
  setTimeout(function() {
    contheight = contheight + "px";
    cont.style.height = contheight;
    cont.overflow = "auto";
  }, 500);
  if (content == "search") {
    setTimeout(function ()
    {
      document.getElementById('searchbox').focus();
    }, 700);
  }
  else { 
    return ""; 
  }
};


function toggleld(ld) {
  let clrs = document.body.style;
  if (ld == light) {
    document.getElementById("darkmode").style.display = "inline";
    document.getElementById("lightmode").style.display = "none";
    clrs.setProperty('--mtf-background-color', "#eff1f5");
    clrs.setProperty('--mtf-font-color', "#4c4f69");
    clrs.setProperty('--mtf-background-2-color', "#e6e9efdf");
    clrs.setProperty('--mtf-accent-color', "#dc8a78");
    clrs.setProperty('--mtf-background-image', "url('src/Clearnight.jpg')");
    setCookie("darklightc", 0, 30);
  }
  else {
    document.getElementById("darkmode").style.display = "none";
    document.getElementById("lightmode").style.display = "inline";
    clrs.setProperty('--mtf-background-color', "#1e1e2e");
    clrs.setProperty('--mtf-font-color', "#cdd6f4");
    clrs.setProperty('--mtf-background-2-color', "#181825df");
    clrs.setProperty('--mtf-accent-color', "#f5e0dc");
    clrs.setProperty('--mtf-background-image', "url('src/Clearday.jpg')");
    setCookie("darklightc", 1, 30);
  }
};

function button_lightmode() {
  document.getElementById("darkmode").style.display = "inline";
  document.getElementById("lightmode").style.display = "none";
  document.body.style.setProperty('--mtf-background-color', "#eff1f5");
  document.body.style.setProperty('--mtf-font-color', "#4c4f69");
  document.body.style.setProperty('--mtf-background-2-color', "#e6e9efdf");
  document.body.style.setProperty('--mtf-accent-color', "#dc8a78");
  document.body.style.setProperty('--mtf-background-image', "url('src/Clearnight.jpg')");
  setCookie("darklightc", 0, 30);
};


function button_darkmode() {
  document.getElementById("darkmode").style.display = "none";
  document.getElementById("lightmode").style.display = "inline";
  document.body.style.setProperty('--mtf-background-color', "#1e1e2e");
  document.body.style.setProperty('--mtf-font-color', "#cdd6f4");
  document.body.style.setProperty('--mtf-background-2-color', "#181825df");
  document.body.style.setProperty('--mtf-accent-color', "#f5e0dc");
  document.body.style.setProperty('--mtf-background-image', "url('src/Clearday.jpg')");
  setCookie("darklightc", 1, 30);
};

function bookmarks_open() {
  let bmks = document.getElementById("bookmarks");
  bmks.style.display = "block";
  bmks.style.opacity = "1"
};

function bookmarks_close(){
  let bmks = document.getElementById("bookmarks");
  bmks.style.display = "none";
  bmks.style.opacity = "0";
}
