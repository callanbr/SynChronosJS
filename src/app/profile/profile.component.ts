import { Component, OnInit } from "@angular/core";
import { ProfileService } from "./profile.service";
import { Observable } from "../../../node_modules/rxjs";
import { ProfileDTO} from "./ProfileDTO";

@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;
  currentProfile: ProfileDTO = new ProfileDTO();

  constructor(private profileService: ProfileService) {}

  profile: ProfileDTO;

  getProfile() {
    var OutOfLocalStorage= (localStorage.getItem('currentUser'));
    var Parseing = JSON.parse (OutOfLocalStorage);

    this.profileService.getProfile(Parseing.Id).subscribe(p => {
      this.profile = p;
      this.currentProfile= p;
    });
  }
  submitProfile() {
    //event.preventDefault();
    // let fnameElement = document.getElementById("firstName");
    //let fname = form.firstName.value;
    //console.log("fname", fname);

    // this.profileService.addProfile(this.currentProfile).subscribe();
    // console.log(this.profile);
  }

 
  

  ngOnInit() {

    this.getProfile();
  }
}
