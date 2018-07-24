function myNavFunction() {
  var x = document.getElementById("topnav");
  if (x.className === "light-mode") {
    x.className += " responsive";
  } else {
    x.className = "light-mode";
  }
}
