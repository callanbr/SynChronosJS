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
  calendarId: number;

  ngOnInit() {
    var OutOfLocalStorage = localStorage.getItem("currentUser");
    var Parseing = JSON.parse(OutOfLocalStorage);
    if (OutOfLocalStorage == null){
    } else 
    {this.profileId = Parseing.Id;
    this.calendarId = Parseing.Id; 
    }
    
    

    // this.calendarId=(Parseing.Id);
  
}
}
