import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Event } from 'src/app/models/Event';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { EventService } from 'src/app/services/event.service';

@Component({
  selector: 'app-event-list',
  templateUrl: './event-list.component.html',
  styleUrls: ['./event-list.component.css']
})
export class EventListComponent implements OnInit {
  p: number = 1;
  imageSrc :string ="src\assets\images\profile.jpeg"


events! : Event[] ; 
  searchTerm: string="";
  constructor(
    private router :Router , 
    private eventService : EventService , 
    private activatedRoute: ActivatedRoute,
    private currentUserService : CurrentUserService
    ) { }
  
  
 
  
    delete(id: number) {

      this.eventService.deleteEvent(id).subscribe((res) => {
        console.log("deleted with success")
        this.ngOnInit();

      }, (error)=> {
        console.log("can't delete")

      }
      
      
      ) }
      // Logic to delete the user at the specified index


    
      preview(id : number){
        const link = 'admin/events/'+id+'/' ; 
        this.router.navigate([link])
    

      }
  ngOnInit(): void {
    this.eventService.getEvents().subscribe(
  (events)=> {
    this.events = events 
  } , 
  (error) =>{

  }

    )




  }

  addOption() {

    const link = ['admin/events/create-event/template'] ; 
    this.router.navigate(link)

  }
  

  



 


}
