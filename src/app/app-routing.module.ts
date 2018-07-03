import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { ChatComponent } from "./chat/chat.component";
import { PhotosComponent } from "./photos/photos.component";
import { EventsComponent } from "./events/events.component";
import { NavComponent } from "./nav/nav.component";

const routes: Routes = [
  { path: "", redirectTo: "/home", pathMatch: "full" },
  { path: "home", component: HomeComponent },
  { path: "calendar", component: CalendarComponent },
  { path: "chat", component: ChatComponent },
  { path: "photos", component: PhotosComponent },
  { path: "events", component: EventsComponent },
  { path: "profile", component: ProfileComponent }
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],

  exports: [RouterModule]
})
export class AppRoutingModule {}
