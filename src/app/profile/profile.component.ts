import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../profile.service";
import { Profile } from "../profile";
import { Observable } from "../../../node_modules/rxjs";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;

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

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.profileService.getFiles();
    }
  }

  ngOnInit() {}
}
