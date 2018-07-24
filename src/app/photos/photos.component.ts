import { Component, OnInit } from "@angular/core";
import { Observable } from "rxjs/Observable";
import { PhotosService } from "../photos.service";

@Component({
  selector: "app-photos",
  templateUrl: "./photos.component.html",
  styleUrls: ["./photos.component.css"]
})
export class PhotosComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private photosService: PhotosService) {}

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.photosService.getFiles();
    }
  }

  ngOnInit() {}
}
