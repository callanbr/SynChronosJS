import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: "root"
})
export class PhotosService {
  addList(name: object) {
    return this.http.post("http://localhost:8080/photos", name);
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

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>("http://localhost:8080/photos");
  }
}
