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
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { SidenavComponent } from "./sidenav/sidenav.component";
import { GroupsComponent } from "./groups/groups.component";


import "flatpickr/dist/flatpickr.css";

import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

import { FlatpickrModule } from "angularx-flatpickr";
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap/modal/modal.module";
import { GlobalComponent } from "./global.component";
import { CommonModule } from "@angular/common";
import { CalendarModule } from "angular-calendar";
import { PhotosService } from "./photos.service";
import { DetailsPhotosComponent } from "./photos/details-photos/details-photos.component";
import { FormPhotosComponent } from "./photos/form-photos/form-photos.component";
import { ListPhotosComponent } from "./photos/list-photos/list-photos.component";
import { MainprofileComponent } from "./mainprofile/mainprofile.component";
import { SettingsComponent } from "./settings/settings.component";
import { loginComponent } from "./login/login.component";
import { LoginService } from "./login/login.service";
import { ProfileService } from "./profile/profile.service";
import { JwtInterceptor, ErrorInterceptor } from "./helpers";
import {
  SocialLoginModule,
  AuthServiceConfig,
  GoogleLoginProvider
} from "angular5-social-login";


export function getAuthServiceConfigs() {
  let config = new AuthServiceConfig([
    {
      id: GoogleLoginProvider.PROVIDER_ID,
      provider: new GoogleLoginProvider(
        "157286943979-ovd6986gl60f6qu2smogs0ddmrrtbusd.apps.googleusercontent.com"
      )
    }
  ]);
  return config;
}

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
    ListPhotosComponent,
    MainprofileComponent,
    SettingsComponent,
    loginComponent
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
    CalendarModule.forRoot(),
    SocialLoginModule
  ],
  providers: [
    PhotosService,
    {
      provide: AuthServiceConfig,
      useFactory: getAuthServiceConfigs
    },
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },

    GlobalComponent
  ],

  bootstrap: [AppComponent]
})
export class AppModule {}
