import { Injectable } from "@angular/core";
import { CEvent } from "./calendar";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import "rxjs/add/operator/map";
import { Observable, pipe } from "rxjs";
import { Http, Headers, Response } from "@angular/http";
@Injectable({
  providedIn: "root"
})
export class CalendarService {
  calendar: CEvent;

  addList(calendar: object) {
    return this.http.post("http://localhost:8080/calendar", calendar);
  }

  addEvent(calendar: Object) {
    return this.http.post("http://localhost:8080/calendar", calendar);
  }

  getEvents(): Observable<CEvent> {
    return this.http.get<CEvent>("http://localhost:8080/calendar");
  }

  constructor(private http: HttpClient) {}
}
