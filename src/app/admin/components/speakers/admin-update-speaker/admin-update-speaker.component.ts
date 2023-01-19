import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, NgForm, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Speaker } from 'src/app/models/Speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-admin-update-speaker',
  templateUrl: './admin-update-speaker.component.html',
  styleUrls: ['./admin-update-speaker.component.css']
})
export class AdminUpdateSpeakerComponent implements OnInit {
imageSrc :string ="src\assets\images\profile.jpeg"
eventId  ="1"
updateSpeakerForm: FormGroup | undefined;
speaker!: Speaker;
speakerForm!: FormGroup;
speakerId!: string;
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
  
  constructor(
   private _formBuilder: FormBuilder, 
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private speakerService : SpeakerService 
    ) { }

  ngOnInit(): void {



    this.updateSpeakerForm = this._formBuilder.group({
      firstName: ['', Validators.required],
      lastName: ['', Validators.required],
      email: ['', Validators.email],
      description: [''],
      job: ['',Validators.required],
      company:[''],
      image: [''],
      linkedinLink:['']
    });
    this.activatedRoute.parent?.parent?.params.subscribe(
      (params)=> {
        console.log("params :" ,params['id'])
      this.eventId =params['idEvent'] ; 
      this.speakerId = params['id'];

      this.speakerService.getSpeakerById(+this.speakerId,+this.eventId).subscribe((speaker: Speaker) => {
        this.speaker = speaker;
        this.updateSpeakerForm!.patchValue({
          firstName: this.speaker.firstName,
          lastName: this.speaker.lastName,
          email: this.speaker.email,
          description: this.speaker.description,
          job:this.speaker.job ,
          company: this.speaker.company, 
          linkedinLink : this.speaker.linkedinLink ,


        });
        this.imageSrc=this.speaker.image ;
      });
    } , 
        
    (error)=>{
      console.log(error)
      this.errorMessage="probleme de connexion à votre serveur" ; 
    
    })


  }

  
  
      
      
  

  firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required],});


  updateSpeaker () : void {


    this.formData.append('id', this.speakerId);

this.formData.append('firstName', this.updateSpeakerForm!.value.firstName);
this.formData.append('lastName', this.updateSpeakerForm!.value.lastName);
this.formData.append('email', this.updateSpeakerForm!.value.email);
this.formData.append('description', this.updateSpeakerForm!.value.description);
this.formData.append('job', this.updateSpeakerForm!.value.job);
this.formData.append('company', this.updateSpeakerForm!.value.company);
this.formData.append('linkedinLink', this.updateSpeakerForm!.value.linkedinLink);

    console.log("this is the speaker " ,this.formData.get('firstname'))
    console.log(this.activatedRoute.parent)
    let link ="admin/events/"+this.eventId+"/speakers" ;
    // this.router.navigate(['/speakers' ,{relativeTo: this.activatedRoute.parent}]);

     this.router.navigate([link]);


 this.speakerService.updateSpeaker(+this.eventId,this.formData ).subscribe(
  (response: any) => {
    console.log("Promise resolved with data:", response);
    let link ="admin/events/"+this.eventId+"/speakers" ;
     this.router.navigate([link]);

  },
  (error:any) => {
        console.log("Promise rejected with error:", error);
      }
      );

  }

}
