function setCookie(cvalue) {
  var d = new Date();
  d.setTime(d.getTime() + (30 * 24 * 60 * 60 * 1000));
  var expires = "expires="+d.toUTCString();
  document.cookie = "theme=" + cvalue + ";" + expires + "; path=/";
}
function getCookie(theme) {
  var name = theme + "=";
  var decodedCookie = decodeURIComponent(document.cookie);
  var ca = decodedCookie.split(';');
  for(var i = 0; i < ca.length; i++) {
    var c = ca[i];
    while (c.charAt(0) == ' ') {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

function checkCookie() {
  var theme = getCookie("theme");
  if (theme == "default") {
  body.className = "";
  }
  if (theme == "light") {
  body.className = "light";
  }
  if (theme == "dark") {
  body.className = "dark";
  }
}


var body = document.querySelector("body");

const goDefault = () => {
  body.className = "";
  setCookie("default");
};

const goDark = () => {
  body.className = "";
  body.classList.add("dark");
  setCookie("dark");
};

const goLight = () => {
  body.className = "";
  body.classList.add("light");
  setCookie("light");
};

document.querySelector(".theme1").addEventListener("click", goDefault);
document.querySelector(".theme2").addEventListener("click", goDark);
document.querySelector(".theme3").addEventListener("click", goLight);

checkCookie();
