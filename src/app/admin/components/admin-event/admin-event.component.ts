import { Component, OnInit } from '@angular/core';


import { NgForm } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { FormBuilder, Validators ,FormGroup } from '@angular/forms';
import { EventService } from 'src/app/services/event.service';
import { Event } from 'src/app/models/Event';


@Component({
  selector: 'app-admin-event',
  templateUrl: './admin-event.component.html',
  styleUrls: ['./admin-event.component.css']
})
export class AdminEventComponent implements OnInit {
  updateSpeakerForm!: FormGroup ;
  event : any ; 
  idEvent! :number ; 
 
  constructor(
    private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute ,
    private eventService : EventService
    ) { }

  ngOnInit(): void {
    
    this.updateSpeakerForm = this._formBuilder.group({
      title: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      description: ['',Validators.required],
   
    });

    this.activatedRoute.parent?.params.subscribe(
      (params)=>{
        this.idEvent=params["idEvent"] 
        this.eventService.getEventById(+this.idEvent).subscribe(
          (event)=>{
            this.event=event  
            this.updateSpeakerForm!.patchValue({
              title: this.event.title,
              dateStart: this.event.dateStart,
              dateEnd: this.event.dateEnd,
              description: this.event.description
    
            });
          }
          , (error)=>{
         console.log("error")
          }
         )
      } , (error)=>{
        console.log(error)
      }
    )

  }
  


  updateEvent() : void {


    this.updateSpeakerForm.value["id"] = this.idEvent;
    console.log("this is form data: ",this.updateSpeakerForm.value);
     this.eventService.updateEvent( this.updateSpeakerForm!.value).subscribe(
      (response: any) => {
        console.log("Promise resolved with data:", response);
        this.ngOnInit()
    
      },
      (error:any) => {
            console.log("Promise rejected with error:", error);
          }
          );
    
      }


  previous(){
    this.router.navigate(['/admin/events/create-event/template']);

  }

































  pictures:any =[{
    src:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",alt:""
  } ,{
    src:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",alt:""
  },{
    src:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",alt:""
  },{
    src:"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",alt:""
  }]
  uploadPicture(picture :any){

  }
  
}
