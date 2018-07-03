import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class CalendarService {
  addList(name: object) {
    return this.http.post("http://localhost:8080/calendar", name);
  }

  constructor(private http: HttpClient) {}
}
