import { Component, OnInit } from "@angular/core";
import { AuthService, GoogleLoginProvider } from "angular5-social-login";
import { LoginService } from "./login.service";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.scss"]
})
export class loginComponent implements OnInit {
  constructor(
    private socialAuthService: AuthService,
    private loginService: LoginService
  ) {}

  public socialSignIn(socialPlatform: string) {
    let socialPlatformProvider;
    if (socialPlatform == "google") {
      socialPlatformProvider = GoogleLoginProvider.PROVIDER_ID;
    }

    this.socialAuthService.signIn(socialPlatformProvider).then(userData => {
      this.loginService.loginUser(userData).subscribe(data => {
        localStorage.setItem(
          "currentUser",
          JSON.stringify({
            token: data.token,
            name: data.name,
            email: data.email,
            image: data.image,
            Id: data.id
          })
        );
      });
    });
  }

  public socialSignOut() {
    this.loginService.logout();
  }

  ngOnInit() {}
}
