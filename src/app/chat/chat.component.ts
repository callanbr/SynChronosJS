import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Chat } from "../chat";
import { Profile } from "../profile";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { ActivatedRoute } from "@angular/router";
@Component({
  selector: "app-chat",
  templateUrl: "./chat.component.html",
  styleUrls: ["./chat.component.scss"],
  animations: [
    trigger("myStagger", [
      transition("* <=> *", [
        query(
          ":enter",
          [
            style({ opacity: 50, transform: "translateY(0px)" }),
            stagger(
              "5ms",
              animate(
                "1ms ease-out",
                style({ opacity: 1, transform: "translateY(0px)" })
              )
            )
          ],
          { optional: true }
        ),
        query(":leave", animate("10ms", style({ opacity: 0 })), {
          optional: true
        })
      ])
    ])
  ]
})
export class ChatComponent implements OnInit {
  constructor(
    private chatService: ChatService,
    private route: ActivatedRoute
  ) {}
  chats: Chat;
  currentChat: Chat = new Chat();
  routeParameter: String;

  getChat() {
    this.chatService.getChat().subscribe(c => {
      this.chats = c;

      function printSomething() {
        setTimeout(printSomething, 10);

        for (var i = 0; i < 10; i++) {}
        window.scrollTo(50, document.body.scrollHeight);
      }
    });
  }
  submitChat() {
    this.currentChat.groupId = this.route.snapshot.paramMap.get("id");
    this.chatService.addChat(this.currentChat).subscribe(() => {
      this.getChat();
      this.currentChat = new Chat();
      console.log(this.route.snapshot.paramMap.get("id"));
    });
  }

  ngOnInit() {
    this.getChat();
    this.routeParameter = this.route.snapshot.paramMap.get("id");
  }
}
// submitImage() {
//   let imageChat = new Chat();
//   imageChat.message =
//   this.chatService.addChat(imageChat).subscribe(() => {
//     this.getChat();
//     this.currentChat = new Chat();
//   });
// }

// function scrolldown() {
//   function printSomething() {
//     setTimeout(printSomething, 1000);

//     for (var i = 0; i < 10; i++) {}
//     window.scrollTo(0, document.body.scrollHeight);
//   }
// }
