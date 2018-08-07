import { Component, OnInit } from "@angular/core";
import { ChatService } from "../chat.service";
import { Chat } from "../chat";
import { ProfileDTO } from "../profile/ProfileDTO";
import { ProfileService } from "../profile/profile.service";
import { Calendar } from "../calendar";
import {
  trigger,
  style,
  transition,
  animate,
  keyframes,
  query,
  stagger
} from "@angular/animations";
import { Observable } from "../../../node_modules/rxjs";

import { DomSanitizer } from "../../../node_modules/@angular/platform-browser";
import {
  ActivatedRoute,
  ParamMap
} from "../../../node_modules/@angular/router";
import { switchMap } from "../../../node_modules/rxjs/operators";
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
  //           style({ opacity: 50, transform: "translateY(0px)" }),
  //           stagger(
  //             "5ms",
  //             animate(
  //               "1ms ease-out",
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
  showFile = false;
  fileUploads: Observable<string[]>;

  currentProfile: ProfileDTO = new ProfileDTO();
  constructor(
    private chatService: ChatService,
    private profileService: ProfileService,
    private domSanitizer: DomSanitizer,
    private route: ActivatedRoute
  ) {}
  chats: Chat;
  currentChat: Chat = new Chat();
  routeParameter: string;

  profile: ProfileDTO;
  profilePic: string;
  getChat() {
    this.routeParameter = this.route.snapshot.paramMap.get("id");
    this.chats = null;
    this.chatService.getChat(parseInt(this.routeParameter)).subscribe(c => {
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
    this.chatService
      .addChat(
        this.currentChat,
        parseInt(this.route.snapshot.paramMap.get("id"))
      )
      .subscribe(() => {
        this.getChat();
        this.currentChat = new Chat();
        console.log("Test:" + this.route.snapshot.paramMap.get("id"));
      });
  }

  getProfile() {
    this.route.paramMap
      .pipe(
        switchMap((params: ParamMap) =>
          this.profileService.getProfile(+params.get("id"))
        )
      )
      .subscribe(p => {
        this.profile = p;
        this.currentProfile = p;
        this.profilePic = p.image;
        console.log(p);
      });
  }

  // submitImage() {
  //   let imageChat = new Chat();
  //   imageChat.message =
  //   this.chatService.addChat(imageChat).subscribe(() => {
  //     this.getChat();
  //     this.currentChat = new Chat();
  //   });
  // }

  ngOnInit() {
    console.log("loading chat component");
    this.getProfile();
    // this.getChat();
    this.routeParameter = this.route.snapshot.paramMap.get("id");
    this.route.url.subscribe(url => {
      this.getChat();
    });
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
