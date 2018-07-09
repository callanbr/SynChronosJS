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

  submitProfile() {
    this.profileService.addProfile(this.currentProfile).subscribe();
  }

  ngOnInit() {
    this.submitProfile();
    console.log(this.profile);
  }
}

