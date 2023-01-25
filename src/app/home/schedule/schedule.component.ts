import { Component, Input, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-schedule',
  templateUrl: './schedule.component.html',
  styleUrls: ['./schedule.component.css']
})
export class ScheduleComponent implements OnInit {
  @Input() eventId! :number;
  days!  :any ; 
  sessions! : Session[] ;
  constructor(private sessionService :SessionService) 
  { 
  }
  

  ngOnInit(): void {
    this.sessionService.getSessions(+this.eventId).subscribe(
      (sessions :Session[])=> {
          this.sessions =sessions ;
          
        }
    )

  }

getStartDays(sessions:Session[]) {
    return sessions.map(session => new Date(session.startTime).getDate());
}





groupSessionsByStartDay(day :any,sessions:Session[]) {
}
}