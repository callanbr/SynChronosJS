import { Injectable } from "@angular/core";
import { HttpClient, HttpRequest, HttpEvent } from "@angular/common/http";
import { Observable } from "rxjs/Observable";
@Injectable({
  providedIn: "root"
})
export class PhotosService {
  addList(name: object) {
    return this.http.post("https://synchronos-java.herokuapp.com/photos", name);
  }

  constructor(private http: HttpClient) {}

  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    let formdata: FormData = new FormData();

    formdata.append("file", file);

    const req = new HttpRequest(
      "POST",
      "https://synchronos-java.herokuapp.com/photos",
      formdata,
      {
        reportProgress: true,
        responseType: "text"
      }
    );

    return this.http.request(req);
  }

  getFiles(): Observable<string[]> {
    return this.http.get<string[]>("https://synchronos-java.herokuapp.com/photos");
  }
}
