import { Component, OnInit } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
import { PhotosService } from "../../photos.service";

@Component({
  selector: "list-photos",
  templateUrl: "./list-photos.component.html",
  styleUrls: ["./list-photos.component.css"]
})
export class ListPhotosComponent implements OnInit {
  showFile = false;
  fileUploads: Observable<string[]>;

  constructor(private photosService: PhotosService) {}

  ngOnInit() {}

  showFiles(enable: boolean) {
    this.showFile = enable;

    if (enable) {
      this.fileUploads = this.photosService.getFiles();
    }
  }
}
