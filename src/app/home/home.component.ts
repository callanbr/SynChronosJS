import { Component, OnInit } from "@angular/core";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from "angular-calendar";
import { CalendarService } from "../calendar.service";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"]
})
export class HomeComponent implements OnInit {
  constructor( private CalendarService: CalendarService) {}
  userName : string;
  events: CalendarEvent[];
  userID : number
  ngOnInit() {
    let currentUser = JSON.parse(localStorage.getItem("currentUser"));
    if (currentUser != null) {
      this.userName = currentUser.name;
      this.userID = currentUser.Id;
      this.CalendarService.getEvents(currentUser.Id).subscribe(data => { 
      
        this.events = data.map(d =>
          //ignore this error it will run
          
          Object.assign(d, { start: new Date(d.start), end: new Date(d.end) })
        );
      });
    }
  }
}
