function toggleDarkLight() {
  var body = document.getElementById("body");
  var bodyClass = body.className;
  body.className = bodyClass == "dark-mode" ? "light-mode" : "dark-mode";
}

function toggleNavDarkLight() {
  var topnav = document.getElementById("topnav");
  var topnavClass = topnav.className;
  topnav.className = topnavClass == "dark-mode" ? "light-mode" : "dark-mode";
}

// function toggleDarkLight() {
//   var body = document.getElementById("body");
//   var bodyClass = body.className;
//   body.className = bodyClass == "dark-mode" ? "light-mode" : "dark-mode";
// }
