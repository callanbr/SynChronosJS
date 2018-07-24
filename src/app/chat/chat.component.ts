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
  styleUrls: ["./chat.component.scss"]
  // animations: [
  //   trigger("myStagger", [
  //     transition("* <=> *", [
  //       query(
  //         ":enter",
  //         [
  //           style({ opacity: 0, transform: "translateY(50px)" }),
  //           stagger(
  //             "5ms",
  //             animate(
  //               "1000ms ease-out",
  //               style({ opacity: 1, transform: "translateY(0px)" })
  //             )
  //           )
  //         ],
  //         { optional: true }
  //       ),
  //       query(":leave", animate("10ms", style({ opacity: 0 })), {
  //         optional: true
  //       })
  //     ])
  //   ])
  // ]
})
export class ChatComponent implements OnInit {
  constructor(private chatService: ChatService) {}
  chats: Chat;
  currentChat: Chat = new Chat();
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
    this.chatService.addChat(this.currentChat).subscribe(() => {
      this.getChat();
      this.currentChat = new Chat();
    });
  }

  ngOnInit() {
    this.getChat();
  }
}

// function scrolldown() {
//   function printSomething() {
//     setTimeout(printSomething, 1000);

//     for (var i = 0; i < 10; i++) {}
//     window.scrollTo(0, document.body.scrollHeight);
//   }
// }
