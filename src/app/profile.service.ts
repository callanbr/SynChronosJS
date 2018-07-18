import { Injectable } from "@angular/core";
import { Profile } from "./profile";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse,
  HttpRequest,
  HttpEvent
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ProfileService {
  profile: Profile;
  getFiles(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/photos");
  }

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append("file", file);

    const req = new HttpRequest(
      "POST",
      "http://localhost:8080/photos",
      formdata,
      {
        reportProgress: true,
        responseType: "text"
      }
    );

    return this.http.request(req);
  }

  addList(name: object) {
    return this.http.post("http://localhost:8080/photos", name);
  }

  // addProfile(arg0: any): any {
  // throw new Error("Method not implemented.");}

  getProfile(): Observable<Profile> {
    return this.http.get<Profile>("http://localhost:8080/profile");
  }

  addProfile(profile: Profile) {
    return this.http.post("http://localhost:8080/profile", profile);
    // {

    // firstName: "Bob",
    //   lastName: "Sagat",
    //   email: "bob@gmail.com",
    //   password: "tiger",
    //   username: "fullhouse"
    // });
  }
}
