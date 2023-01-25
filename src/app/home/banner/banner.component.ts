import { Component, OnInit ,Input  } from '@angular/core';
import { Event } from 'src/app/models/Event';
import { EventService } from 'src/app/services/event.service';
@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {


  @Input() eventId! :number;
  event!:Event
  days!:number;
  hours!:number;
  minutes!:number;
  seconds!:number;
  constructor(private eventService:EventService) { }

  
  ngOnInit(): void {
    this.eventService.getEventById(this.eventId).subscribe(
  (event)=>{
    this.event=event
    setInterval(() => {
      const timeLeft = this.calculateTimeLeft(this.event.dateStart);
      
      this.days= Math.floor(timeLeft / 86400000);
      
      this.hours= Math.floor((timeLeft % 86400000)/3600000);
      
      this.minutes= Math.floor((timeLeft % 3600000)/60000);
      
      this.seconds= Math.floor((timeLeft % 60000)/1000);
      


    }, 1000);
  }
);

  }

calculateTimeLeft(startDate:Date) {
  const startDate1=new Date(startDate).getTime()
  const currentTime = new Date().getTime();
  const timeLeft = startDate1 - currentTime;
  return timeLeft;
}



}
