import {
  Component,
  ViewChild,
  ChangeDetectionStrategy,
  TemplateRef,
  OnInit
} from "@angular/core";

import {
  startOfDay,
  endOfDay,
  subDays,
  addDays,
  endOfMonth,
  isSameDay,
  isSameMonth,
  addHours
} from "date-fns";
import "rxjs/add/operator/map";
import { Subject, Observable, pipe } from "rxjs";
import {
  CalendarEvent,
  CalendarEventAction,
  CalendarEventTimesChangedEvent
} from "angular-calendar";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap/modal/modal";
import { CalendarService } from "../calendar.service";
import { CEvent } from "../calendar";
import { ActivatedRoute, ParamMap } from "@angular/router";
import { switchMap } from "rxjs/operators";
// import { CalendarEvent } from "../calendar";
const colors: any = {
  red: {
    primary: "#ad2121",
    secondary: "#FAE3E3"
  },
  blue: {
    primary: "#1e90ff",
    secondary: "#D1E8FF"
  },
  yellow: {
    primary: "#e3bc08",
    secondary: "#FDF1BA"
  }
};

@Component({
  selector: "app-calendar",
  changeDetection: ChangeDetectionStrategy.OnPush,
  templateUrl: "./calendar.component.html",
  styleUrls: ["./calendar.component.css"]
})
export class CalendarComponent implements OnInit {
  //constructor(private calendarService: CalendarService) {}

  @ViewChild("modalContent") modalContent: TemplateRef<any>;
  view: string = "month";

  viewDate: Date = new Date();
  profileId: number; 
  modalData: {
    action: string;
    event: CalendarEvent;
  };

  actions: CalendarEventAction[] = [
    {
      label: '<i class="fa fa-fw fa-pencil"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.handleEvent("Edited", event);
      }
    },
    {
      label: '<i class="fa fa-fw fa-times"></i>',
      onClick: ({ event }: { event: CalendarEvent }): void => {
        this.events = this.events.filter(iEvent => iEvent !== event);
        this.handleEvent("Deleted", event);
      }
    }
  ];

  refresh: Subject<any> = new Subject();

  events: CalendarEvent[] = [
    // {
    //   start: subDays(startOfDay(new Date()), 1),
    //   end: addDays(new Date(), 1),
    //   title: "A 3 day event",
    //   color: colors.red,
    //   actions: this.actions
    // },
    // {
    //   start: startOfDay(new Date()),
    //   title: "An event with no end date",
    //   color: colors.yellow,
    //   actions: this.actions
    // },
    // {
    //   start: subDays(endOfMonth(new Date()), 3),
    //   end: addDays(endOfMonth(new Date()), 3),
    //   title: "A long event that spans 2 months",
    //   color: colors.blue
    // },
    {
      start: addHours(startOfDay(new Date()), 2),
      end: new Date(),
      title: "A draggable and resizable event",
      color: colors.yellow,
      actions: this.actions,
      resizable: {
        beforeStart: true,
        afterEnd: true
      },
      draggable: true
    }
  ];

  activeDayIsOpen: boolean = true;

  constructor(
    private modal: NgbModal,
    private calendarService: CalendarService,
    private route: ActivatedRoute        
  ) {}
  // constructor(private calendarService: CalendarService) {}

  dayClicked({ date, events }: { date: Date; events: CalendarEvent[] }): void {
    if (isSameMonth(date, this.viewDate)) {
      if (
        (isSameDay(this.viewDate, date) && this.activeDayIsOpen === true) ||
        events.length === 0
      ) {
        this.activeDayIsOpen = false;
      } else {
        this.activeDayIsOpen = true;
        this.viewDate = date;
      }
    }
  }

  eventTimesChanged({
    event,
    newStart,
    newEnd
  }: CalendarEventTimesChangedEvent): void {
    event.start = newStart;
    event.end = newEnd;
    this.handleEvent("Dropped or resized", event);
    this.refresh.next();
  }

  handleEvent(action: string, event: CalendarEvent): void {
    this.modalData = { event, action };
    this.modal.open(this.modalContent, { size: "lg" });
  }

  addEvent(): void {
    this.events.push({
      title: "New event",
      start: startOfDay(new Date()),
      end: endOfDay(new Date()),
      color: colors.red,
      draggable: true,
      resizable: {
        beforeStart: true,
        afterEnd: true
      }
    });
    this.refresh.next();


  }
  saveEvent(newEvent) {
    var yourNewVariable = {
      "start": newEvent.start,
      "end": newEvent.end,
      "title": newEvent.title,
      "color": newEvent.color.primary,
      "profile": { "id" : this.profileId }
    };
    if (newEvent.id != null){
      (<any>yourNewVariable).id = newEvent.id;
    } 
    this.calendarService.addEvent(yourNewVariable).subscribe(calendar => {
      newEvent.id = (<any>calendar).id;
    });
     
  }

  ngOnInit() {
    this.route.paramMap.pipe(
     switchMap((params: ParamMap) =>
      this.calendarService.getEvents(+params.get("id")))).subscribe(data => { 
      
      this.events = data.map(d =>
        //ignore this error it will run
        
        Object.assign(d, { start: new Date(d.start), end: new Date(d.end) })
      );
      this.refresh.next();
    });
  
    this.route.paramMap.subscribe((params: ParamMap) => this.profileId= +params.get("id"));
    
  }
  
}
