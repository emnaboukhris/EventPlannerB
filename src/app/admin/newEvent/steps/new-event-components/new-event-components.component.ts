import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';

@Component({
  selector: 'app-new-event-components',
  templateUrl: './new-event-components.component.html',
  styleUrls: ['./new-event-components.component.css']
})
export class NewEventComponentsComponent implements OnInit {
  event! : any ;  

  constructor(


    private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute, 
 private eventService : EventService
  ) { }

  submit(createEventForm :NgForm) {  
    console.log("this.event")

    console.log(this.event)


    //const link = 'admin/events/2' ; 
    //this.router.navigate([link])
 

    this.eventService.addEvent(this.event).subscribe(
     (event)=>{
       const link = 'admin' ; 
       this.router.navigate([link])
    
     }
     , (error)=>{
    
     }
    )
    
    }


  previous(){


    let navigationExtras: NavigationExtras = {

      queryParams: {
        'title': this.event.title,
        'dateStart': this.event.dateStart, 
        'dateEnd' :this.event.dateEnd, 
     'description' :this.event.description,
        
      }
    };
    this.router.navigate(['/admin/events/create-event/new'], navigationExtras)


  }

  



   ngOnInit(): void {


    this.activatedRoute.queryParams.subscribe(params => {
      console.log( "the eventfdfdf",params); // { param1: 'value1', param2: 'value2' }
      this.event = params 
    });
   
   }
 




}
