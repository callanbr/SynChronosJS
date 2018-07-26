import { Component, OnInit } from "@angular/core";
import { PhotosService } from "../../photos.service";
import {
  HttpEventType,
  HttpResponse
} from "../../../../node_modules/@angular/common/http";

@Component({
  selector: "form-photos",
  templateUrl: "./form-photos.component.html",
  styleUrls: ["./form-photos.component.css"]
})
export class FormPhotosComponent implements OnInit {
  // public isCollapsed = true;
  selectedFiles: FileList;
  currentFileUpload: File;
  progress: { percentage: number } = { percentage: 0 };
  constructor(private photosService: PhotosService) {}

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
    this.photosService
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
