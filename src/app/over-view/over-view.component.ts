import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { event } from 'jquery';
import { Event } from '../models/Event';
import { EventService } from '../services/event.service';

@Component({
  selector: 'app-over-view',
  templateUrl: './over-view.component.html',
  styleUrls: ['./over-view.component.css']
})
export class OverViewComponent implements OnInit {

  p: number = 1;

  events! : Event[]
  searchTerm: string="";

  constructor( private eventService :EventService , 
    private router: Router 
     ) { }
  
  ngOnInit(): void {

  this.eventService.getEventsAll().subscribe(
      (events)=>{
        this.events=events ;
        this.events.forEach((event:Event,index:number)=>{
          event.image = 'assets/images/events/event'+ ((index % 8)+1)+'.jfif';
        }) 
      }
    , (error)=>{
      console.log('server error')
    }
  )
  }
  goTo(id :number){
    let link ="publishEvent/"+id ;
     this.router.navigate([link]);

  }
}
