import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-darkmode",
  templateUrl: "./darkmode.component.html",
  styleUrls: ["./darkmode.component.scss"]
})
export class DarkmodeComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    if (document.getElementById("body").className == "dark-mode") {
      (<any>document.getElementById("switchCheckbox")).checked = true;
    }
  }
}
