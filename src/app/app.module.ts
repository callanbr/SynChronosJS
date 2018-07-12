import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { CalendarComponent } from "./calendar/calendar.component";
import { ChatComponent } from "./chat/chat.component";
import { PhotosComponent } from "./photos/photos.component";
import { EventsComponent } from "./events/events.component";
import { NavComponent } from "./nav/nav.component";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from ".//app-routing.module";
import { HttpClientModule } from "@angular/common/http";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { GroupsComponent } from "./groups/groups.component";

import "flatpickr/dist/flatpickr.css";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap/modal/modal.module";

import { CommonModule } from "@angular/common";
import { CalendarModule } from "angular-calendar";
import { MainprofileComponent } from "./mainprofile/mainprofile.component";
import { SettingsComponent } from './settings/settings.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    CalendarComponent,
    ChatComponent,
    PhotosComponent,
    EventsComponent,
    NavComponent,
    SidenavComponent,
    GroupsComponent,
    MainprofileComponent,
    SettingsComponent
  ],

  imports: [
    BrowserAnimationsModule,
    CommonModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    NgbModalModule.forRoot(),
    FlatpickrModule.forRoot(),
    CalendarModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
