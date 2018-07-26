//Changes Reset on 8/26/2018

import { Component, OnInit, Input } from "@angular/core";

@Component({
  selector: "app-profile-photo-detail",
  templateUrl: "./profile-photo-detail.component.html",
  styleUrls: ["./profile-photo-detail.component.css"]
})
export class ProfilePhotoDetailComponent implements OnInit {
  @Input() fileUpload: string;
  constructor() {}

  ngOnInit() {}
}
