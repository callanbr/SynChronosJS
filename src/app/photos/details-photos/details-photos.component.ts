import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "details-photos",
  templateUrl: "./details-photos.component.html",
  styleUrls: ["./details-photos.component.css"]
})
export class DetailsPhotosComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() {}

  ngOnInit() {}
}
