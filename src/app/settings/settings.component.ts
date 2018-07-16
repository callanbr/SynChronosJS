import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-settings",
  templateUrl: "./settings.component.html",
  styleUrls: ["./settings.component.scss"]
})
export class SettingsComponent implements OnInit {
  constructor() {}

  ngOnInit() {}
}

// function toggleDarkLight() {
//   var body = document.getElementById("body");
//   console.log(body);
//   var currentClass = body.className;
//   var icon = document.getElementById("switchCheckbox");
//   icon.innerHTML = currentClass == "dark-mode" ? "☀️" : "🌙";

//   body.className = currentClass == "dark-mode" ? "light-mode" : "dark-mode";
// }
//
