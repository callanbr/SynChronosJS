import { Component } from "@angular/core";
import { HomeService } from "./home.service";
import { ChatService } from "./chat.service";
// import { ProfilePhotoService } from "./profilePhoto.service";
import { CalendarService } from "./calendar.service";
import { EventsService } from "./events.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"]
})
export class AppComponent {
  listName: string;
  submitList(): void {
    //save my data
    console.log("submit!");
    this.homeService.addList({ name: this.listName }).subscribe();
  }

  constructor(private homeService: HomeService) {}
}
