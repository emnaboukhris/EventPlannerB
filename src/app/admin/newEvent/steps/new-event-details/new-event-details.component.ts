import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';

@Component({
  selector: 'app-new-event-details',
  templateUrl: './new-event-details.component.html',
  styleUrls: ['./new-event-details.component.css']
})
export class NewEventDetailsComponent implements OnInit {





  updateSpeakerForm!: FormGroup ;
 event : any ; 
  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
  constructor(
    private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute
    
    
    ) { }

  ngOnInit(): void {

    
    this.updateSpeakerForm = this._formBuilder.group({
      title: ['', Validators.required],
      dateStart: ['', Validators.required],
      dateEnd: ['', Validators.required],
      description: ['',Validators.required],
   
    });

    this.activatedRoute.queryParams.subscribe(
      (params)=>{
        console.log( "the dataa" ,params  )
      this.event = params ;
      if(this.event){
        this.updateSpeakerForm!.patchValue({
          title: this.event.title,
          dateStart: this.event.dateStart,
          dateEnd: this.event.dateEnd,
          description: this.event.description

        });
      }
      } , (error)=>{
        console.log(error)
      }
    )

  }
  
  onButtonClick():void {
    console.log(this.updateSpeakerForm.value)

    let navigationExtras: NavigationExtras = {

      queryParams: {
        'title': this.updateSpeakerForm.value.title,
        'dateStart': this.updateSpeakerForm.value.dateStart, 
        'dateEnd' :this.updateSpeakerForm.value.dateEnd, 
     'description' :this.updateSpeakerForm.value.description,
        
      }
    };
    this.router.navigate(['/admin/events/create-event/components'], navigationExtras);
    
  }

  previous(){
    this.router.navigate(['/admin/events/create-event/template']);

  }











  
}
