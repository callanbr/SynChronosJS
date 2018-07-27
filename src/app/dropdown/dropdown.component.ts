import { Component, OnInit } from "@angular/core";
import { CalendarService } from "../calendar.service";

@Component({
  selector: "app-dropdown",
  templateUrl: "./dropdown.component.html",
  styleUrls: ["./dropdown.component.css"]
})
export class DropdownComponent implements OnInit {
  public isCollapsed = true;
  getEvents: any;

  constructor(private calendarService: CalendarService) {}

  ngOnInit() {
    this.getEvents();
  }
}
