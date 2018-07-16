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
import { PhotosService } from "./photos.service";
import { DetailsPhotosComponent } from "./photos/details-photos/details-photos.component";
import { FormPhotosComponent } from "./photos/form-photos/form-photos.component";
import { ListPhotosComponent } from "./photos/list-photos/list-photos.component";

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
    DetailsPhotosComponent,
    FormPhotosComponent,
    ListPhotosComponent
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
  providers: [PhotosService],
  bootstrap: [AppComponent]
})
export class AppModule {}
