import { Component, OnInit } from "@angular/core";
// import { Profile } from "../profile";

@Component({
  selector: "app-nav",
  templateUrl: "./nav.component.html",
  styleUrls: ["./nav.component.scss"]
})
export class NavComponent implements OnInit {
  constructor() {}

  profileId: number;
  // calendarId: number;


  ngOnInit() {
    
    var OutOfLocalStorage= (localStorage.getItem('currentUser'));
    var Parseing = JSON.parse (OutOfLocalStorage);
    this.profileId=(Parseing.Id);
    // this.calendarId=(Parseing.Id);
  }
}
