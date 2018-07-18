import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";



@Injectable({ providedIn:"root"})
export class LoginService {
  heroesUrl = "http://localhost:8080/login"; // URL to web api

  constructor(private http: HttpClient) {}

  loginUser(userData: any): Observable<any> {
    return this.http.post(this.heroesUrl, userData, {responseType: 'text'});
  }


  logout() {
    localStorage.removeItem("currentUser");
  }
}
