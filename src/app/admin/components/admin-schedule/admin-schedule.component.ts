import { Component, OnInit } from '@angular/core';
import { Session } from 'src/app/models/Session';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/services/speaker.service';
import { SessionService } from 'src/app/services/session.service';
import { Speaker } from 'src/app/models/Speaker';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-admin-schedule',
  templateUrl: './admin-schedule.component.html',
  styleUrls: ['./admin-schedule.component.css']
})
export class AdminScheduleComponent implements OnInit {

  isContactActive = false;
  isToggleActive = true;
  isSpeakerActive = false;
  isToggle2Active = false;
  isBodyOpen = false;
  showSidebar = true;
  showSecondarySidebar = false;
  speakers :Speaker[]=[]
  imageSrc :string ="src\assets\images\profile.jpeg"
  users :any = [
    { name: 'John Doe', age: 30, gender: 'Male' },
    { name: 'Jane Smith', age: 25, gender: 'Female' },
    { name: 'Bob Johnson', age: 35, gender: 'Other' }
  ];

sessions : Session[]=[]
  session : any[] = [{
    activity:"flutter ",
    title:"flutter intro ",
    description:"teeeeeeeeeeeee", 
    startTime:"1234:55:5",
    endTime:"1234:55:5" , 
    speaker:"emna"
  } , 

  {
    activity:"flutter ",
    title:"flutter intro ",
    description:"teeeeeeeeeeeee", 
    startTime:"1234:55:5",
    endTime:"1234:55:5" , 
    speaker:"emna"
  },{
    activity:"flutter ",
    title:"flutter intro ",
    description:"teeeeeeeeeeeee", 
    startTime:"1234:55:5",
    endTime:"1234:55:5" , 
    speaker:"emna"
  },{
    activity:"flutter ",
    title:"flutter intro ",
    description:"teeeeeeeeeeeee", 
    startTime:"1234:55:5",
    endTime:"1234:55:5" , 
    speaker:"emna"
  },{
    activity:"flutter ",
    title:"flutter intro ",
    description:"teeeeeeeeeeeee", 
    startTime:"1234:55:5",
    endTime:"1234:55:5" , 
    speaker:"emna"
  }
]
speaker = [
  { value: 'option1', name: 'Option 1' },
  { value: 'option2', name: 'Option 2' },
  { value: 'option3', name: 'Option 3' }
];
selectedOption: string="";

addOption() {
  // code to add a new option to the options array
}
  editingIndex = -1;

  save(index: number) {
    // Logic to save the changes to the user at the specified index
    // ...
  }

  delete(index: number) {
    // Logic to delete the user at the specified index
    // ...
  }
  eventId  ="1"
  errorMessage:string=""
   formData = new FormData();
  
    uploadFile(event :any) {
      const file = event.target.files[0];
      const reader = new FileReader();
      reader.onload = (e: any) => {
        this.imageSrc = e.target.result;
      }
      reader.readAsDataURL(file);
      this.formData.append('image', file);
    }
    isOpened = true;
    constructor(
     private _formBuilder: FormBuilder, 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private speakerService : SpeakerService,
     private sessionService :SessionService
      ) { }
  
 
        
    
  
    firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required],});
  
   addSession(formulaire :NgForm) : void {
    formulaire.value['eventId']=+this.eventId;
    console.log(formulaire.value);
    console.log(this.selectedOption);
    formulaire.value['event']= +formulaire.value['eventId'];
    formulaire.value['speaker']=+this.selectedOption;
    this.sessionService.addSession(formulaire.value).subscribe(
      (response: any) => {
        console.log("Promise resolved with data:", response);    
        this.isOpened = false;
        this.ngOnInit();
      },
      (error:any) => {
            console.log("Promise rejected with error:", error);
          }
          );


          this.speakerService.getSpeakers(+this.eventId).subscribe(
            (response: any) => {
              console.log("Promise resolved with data:", response);    
            },
            (error:any) => {
                  console.log("Promise rejected with error:", error);
                }
                );
    
   }



    addSpeaker (formulaire: NgForm) : void {
  
  
  this.formData.append('firstname', formulaire.value.firstname);
  this.formData.append('lastname', formulaire.value.lastname);
  this.formData.append('job', formulaire.value.job);
  this.formData.append('company', formulaire.value.company);
  this.formData.append('description', formulaire.value.description);
  this.formData.append('email', formulaire.value.email);
  this.formData.append('linkedinLink', formulaire.value.linkedinLink);
  
  
  
  formulaire.value['eventId']=+this.eventId
   this.speakerService.addSpeaker( formulaire.value ).subscribe(
    (response: any) => {
      console.log("Promise resolved with data:", response);   
    },
    (error:any) => {
          console.log("Promise rejected with error:", error);
        }
        );
    }


    ngOnInit(): void {

    this.activatedRoute.parent?.params.subscribe(
      (params)=> {
        console.log("params :" , params['idEvent'])
      this.eventId =params['idEvent'] ; 
      console.log(this.eventId);
      this.sessionService.getSessions(+this.eventId).subscribe(
        (sessions)=>{
          this.sessions=sessions 
          console.log(this.sessions)
        }, (error)=>{
          this.errorMessage="probleme de connexion session" ; 
        }
      )
      },
      (error)=>{
        console.log(error)
        this.errorMessage="probleme de connexion à votre serveur" ; 
      }
  )
  this.activatedRoute.parent?.params.subscribe(
    (params)=> {
      console.log("params :" , params['idEvent'])
    this.eventId =params['idEvent'] ; 
    console.log(this.eventId);
    this.speakerService.getSpeakers(+this.eventId).subscribe(
      (speakers)=>{
        this.speakers=speakers;
        console.log(this.speakers)
      }, (error)=>{
        this.errorMessage="probleme de connexion session" ; 
      }
    )
    },
    (error)=>{
      console.log(error)
      this.errorMessage="probleme de connexion à votre serveur" ; 
    }
)

    document.addEventListener('click', (event:any) => {
      if (!event.target.closest('.sidebar-contact, .toggle')) {
        this.isContactActive = false;
        this.isToggleActive = false;
        this.isBodyOpen = false;
      }
      if (!event.target.closest('.sidebar-speaker, .toggle2')) {
        this.isSpeakerActive = false;
        this.isToggle2Active = false;
        this.isBodyOpen = false;
      }
    });
  }  
}





