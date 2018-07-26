import { Injectable } from "@angular/core";
import { HttpClient, HttpParams } from "@angular/common/http";
import { HttpHeaders } from "@angular/common/http";

import { Observable } from "rxjs";
import { catchError } from "rxjs/operators";



@Injectable({ providedIn:"root"})
export class ProfileService {
  heroesUrl = "http://localhost:8080/profile/"; // URL to web api

  constructor(private http: HttpClient) {}
 
  getProfile(id: number): Observable<any> {
    return this.http.get(this.heroesUrl+id);

  }


}
