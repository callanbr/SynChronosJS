import { Injectable } from "@angular/core";
import { Chat } from "./chat";
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
  HttpResponse
} from "@angular/common/http";
import { Observable } from "rxjs";
import { Http, Headers, Response } from "@angular/http";

@Injectable({
  providedIn: "root"
})
export class ChatService {
  chats: Chat;
  getChat(groupid: number): Observable<Chat> {
    console.log(groupid);
    return this.http.get<Chat>("http://localhost:8080/chat/" + groupid);
  }

  addChat(chats: Chat, groupid: number) {
    return this.http.post("http://localhost:8080/chat", chats);
  }

  constructor(private http: HttpClient) {}
}
