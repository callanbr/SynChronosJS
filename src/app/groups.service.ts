import { Injectable } from "@angular/core";
import { Group } from "./groups";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class GroupsService {
  group: Group;
  getGroup(): Observable<Group> {
    return this.http.get<Group>("https://synchronos-java.herokuapp.com/groups");
  }
  addGroup(group: Group) {
    return this.http.post("https://synchronos-java.herokuapp.com/groups", group);
  }

  constructor(private http: HttpClient) {}
}
