import { Component, OnInit } from "@angular/core";
import { GroupsService } from "../groups.service";
import { Group } from "../groups";

@Component({
  selector: "app-groups",
  templateUrl: "./groups.component.html",
  styleUrls: ["./groups.component.scss"]
})
export class GroupsComponent implements OnInit {
  makeGroup: Group = new Group();
  constructor(private groupsService: GroupsService) {}

  group: Group;

  getGroup() {
    this.groupsService.getGroup().subscribe(g => {
      this.group = g;
    });
  }

  submitGroup() {
    this.groupsService.addGroup(this.makeGroup).subscribe(() => {
      this.getGroup();
      this.makeGroup = new Group();
    });
    console.log(this.group.groupid);
  }

  ngOnInit() {
    this.getGroup();
  }
}
