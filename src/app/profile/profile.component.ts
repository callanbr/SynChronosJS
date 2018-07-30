import { Component, OnInit } from "@angular/core";
// import { ProfilePhotoService } from "../profilePhoto.service";
import { ProfileService } from "./profile.service"; 
// import { Profile } from "../profile";
import {ProfileDTO} from "./ProfileDTO";
import { Observable } from "../../../node_modules/rxjs";
import { DomSanitizer } from "@angular/platform-browser";
import { ActivatedRoute, Router, ParamMap } from "@angular/router";
import {switchMap, switchMapTo} from 'rxjs/operators'; 



@Component({
  selector: "app-profile",
  templateUrl: "./profile.component.html",
  styleUrls: ["./profile.component.css"]
})
export class ProfileComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;

  currentProfile: ProfileDTO = new ProfileDTO();
  constructor(private profileService: ProfileService, private domSanitizer: DomSanitizer, private route: ActivatedRoute ) {}

  profile: ProfileDTO;
  profilePic: string;



 
  getProfile() {

    this.route.paramMap.pipe(
      switchMap((params: ParamMap) =>
     this.profileService.getProfile(+params.get("id")))).subscribe(p => { 
      this.profile = p;
      this.currentProfile= p;
      this.profilePic= p.image; 
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

  // showFiles(enable: boolean) {
  //   this.showFile = enable;

  //   if (enable) {
  //     this.fileUploads = this.profileService.getFiles();
  //   }
  // }

  ngOnInit() {
  this.getProfile();
}
}
