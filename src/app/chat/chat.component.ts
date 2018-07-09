import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Chat } from "../chat";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
  animations: [
    trigger("listStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 0, transform: "translateY(-15px)" }),
            stagger(
              "100ms",
              animate(
                "600ms ease-out",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("100ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService) {}

  chats: Chat;
  currentChat: Chat = new Chat();
  getChat() {
    this.chatService.getChat().subscribe(c => {
      this.chats = c;
    });
  }
  submitChat() {
    this.chatService.addChat(this.currentChat).subscribe();
  }

  ngOnInit() {
    this.getChat();

    console.log(this.chats);
  }
}

document.addEventListener("keyup", function(e) {
  if (e.keyCode == 13) window.location.reload();
});

window.onload = function() {
  var objDiv = document.getElementById("chatBody");
  objDiv.scrollTop = objDiv.scrollHeight;
};
