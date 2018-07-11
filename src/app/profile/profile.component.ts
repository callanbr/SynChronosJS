import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { Profile } from "../profile";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  currentProfile: Profile = new Profile();
  constructor(private profileService: ProfileService) {}

  profile: Profile;

  getProfile() {
    this.profileService.getProfile().subscribe(p => {
      this.profile = p;
    });
  }
  submitProfile() {
    //event.preventDefault();
    // let fnameElement = document.getElementById("firstName");
    //let fname = form.firstName.value;
    //console.log("fname", fname);

    this.profileService.addProfile(this.currentProfile).subscribe();
    console.log(this.profile);
  }

  ngOnInit() {}
}
