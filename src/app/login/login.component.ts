import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
declare var gapi: any;

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class loginComponent implements OnInit {
  constructor(private socialAuthService: AuthService) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      console.log(socialPlatform + " sign in data : ", userData);
      // Now sign-in with userData
      console.log("This is a token:" + userData.token);
    });
  }

  
  public socialSignOut() {
    var auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(function() {
      console.log("User signed out.");
    });
    alert("Google Logout.");
  }

  //  loadClient(): Promise<any> {
  //   return new Promise((resolve, reject) => {
  //       this.zone.run(() => {
  //              gapi.load('client', {
  //                  callback: resolve,
  //                  onerror: reject,
  //                  timeout: 1000, // 5 seconds.
  //                  ontimeout: reject
  //              });
  //       });
  //  });

  //  this.zone.run(() => {
  //   // gapi.load
  // });

  ngOnInit() {}
}
