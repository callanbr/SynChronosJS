import { Injectable } from "@angular/core";
import { Profile } from "./profile";
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
export class ProfileService {
  profile: Profile;

  // addProfile(arg0: any): any {
  // throw new Error("Method not implemented.");}

  addProfile(profile: Profile) {
    return this.http.post("http://localhost:8080/profile", profile);
  }

  constructor(private http: HttpClient) {}
}
