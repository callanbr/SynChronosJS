function toggleDarkLight() {
  var body = document.getElementById("body");
  var currentClass = body.className;
  var myDiv = document.getElementById("myDiv");
  var currentClass = myDiv.className;

  var topnav = document.getElementById("topnav");
  var currentClass = topnav.className;

  body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  myDiv.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";

  topnav.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
}
