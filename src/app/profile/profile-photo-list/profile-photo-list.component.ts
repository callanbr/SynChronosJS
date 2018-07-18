import { Component, OnInit } from "@angular/core";
import { Observable } from "../../../../node_modules/rxjs";
import { ProfileService } from "../../profile.service";

@Component({
  selector: "profile-photo-list",
  templateUrl: "./profile-photo-list.component.html",
  styleUrls: ["./profile-photo-list.component.css"]
})
export class ProfilePhotoListComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.profileService.getFiles();
    }
  }
}
