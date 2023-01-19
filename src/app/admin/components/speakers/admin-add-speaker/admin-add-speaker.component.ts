import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-admin-add-speaker',
  templateUrl: './admin-add-speaker.component.html',
  styleUrls: ['./admin-add-speaker.component.css']
})
export class AdminAddSpeakerComponent implements OnInit {
  imageSrc :string ="src\assets\images\profile.jpeg"
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
  
  constructor(
   private _formBuilder: FormBuilder, 
   private router: Router,
   private activatedRoute: ActivatedRoute,
   private speakerService : SpeakerService 
    ) { }

  ngOnInit(): void {

    this.activatedRoute.parent?.parent?.params.subscribe(
      (params)=> {
        console.log("params :" , params['idEvent'])
      this.eventId =params['idEvent'] ; 
      },
      (error)=>{
        console.log(error)
        this.errorMessage="probleme de connexion à votre serveur" ; 
      
      }

  )
  
      } 
      
  

  firstFormGroup = this._formBuilder.group({ firstCtrl: ['', Validators.required],});


  addSpeaker (formulaire: NgForm) : void {


this.formData.append('firstname', formulaire.value.firstname);
this.formData.append('lastname', formulaire.value.lastname);
this.formData.append('job', formulaire.value.job);
this.formData.append('company', formulaire.value.company);
this.formData.append('description', formulaire.value.description);
this.formData.append('email', formulaire.value.email);
this.formData.append('linkedinLink', formulaire.value.linkedinLink);



    console.log("this is the speaker " ,this.formData.get('firstname'))
    this.activatedRoute.url.subscribe(url => console.log(url));
    console.log(this.activatedRoute.parent)
    let link ="admin/events/"+this.eventId+"/speakers" ;
    // this.router.navigate(['/speakers' ,{relativeTo: this.activatedRoute.parent}]);

     this.router.navigate([link]);


 this.speakerService.addSpeaker(+this.eventId,this.formData ).subscribe(
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
