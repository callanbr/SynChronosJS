import { Component, OnInit } from "@angular/core";
import { ProfileService } from "../../profile.service";
import {
  HttpEventType,
  HttpResponse
} from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "profile-photo-form",
  templateUrl: "./profile-photo-form.component.html",
  styleUrls: ["./profile-photo-form.component.css"]
})
export class ProfilePhotoFormComponent implements OnInit {
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private profileService: ProfileService) {}

  ngOnInit() {}

  selectFile(event) {
    const file = event.target.files.item(0);

    if (file.type.match("image.*")) {
      this.selectedFiles = event.target.files;
    } else {
      alert("invalid format!");
    }
  }

  upload() {
    this.progress.percentage = 0;

    this.currentFileUpload = this.selectedFiles.item(0);
    this.profileService
      .pushFileToStorage(this.currentFileUpload)
      .subscribe(event => {
        if (event.type === HttpEventType.UploadProgress) {
          this.progress.percentage = Math.round(
            (100 * event.loaded) / event.total
          );
        } else if (event instanceof HttpResponse) {
          console.log("File is completely uploaded!");
        }
      });

    this.selectedFiles = undefined;
  }
}
