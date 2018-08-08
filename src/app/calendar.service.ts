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
    return this.http.post("https://synchronos-java.herokuapp.com/calendar", calendar);
  }


  addEvent(calendar: Object) {
    return this.http.post("https://synchronos-java.herokuapp.com/calendar", calendar);
  }

  getEvents(profileId : number): Observable<CEvent> {
    return this.http.get<CEvent>("https://synchronos-java.herokuapp.com/calendar/"+ profileId);
  }

  deleteEvents(id:number){
  return this.http.delete("https://synchronos-java.herokuapp.com/calendar/" + id);
 }

  constructor(private http: HttpClient) {}
 
}
