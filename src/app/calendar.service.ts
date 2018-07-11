import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CalendarService {
  addList(calendar: object) {
    return this.http.post("http://localhost:8080/calendar", calendar);
  }

  addEvent(calendar: Object) {
    return this.http.post("http://localhost:8080/calendar", calendar);
  }

  getEvents() {
    return this.http.get("http://localhost:8080/calendar");
  }

  constructor(private http: HttpClient) {}
}
