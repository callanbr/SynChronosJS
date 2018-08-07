import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
@Injectable({
  providedIn: "root"
})
export class HomeService {
  addList(name: object) {
    return this.http.post("https://synchronos-java.herokuapp.com/home", name);
  }

  constructor(private http: HttpClient) {}
}
