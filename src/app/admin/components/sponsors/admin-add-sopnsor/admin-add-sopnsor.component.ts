import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-admin-add-sopnsor',
  templateUrl: './admin-add-sopnsor.component.html',
  styleUrls: ['./admin-add-sopnsor.component.css']
})
export class AdminAddSopnsorComponent implements OnInit {

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
  
      this.formData.append('logo', file);
  
  
    }
    
    constructor(
     private _formBuilder: FormBuilder, 
     private router: Router,
     private activatedRoute: ActivatedRoute,
     private sponsorService : SponsorService 
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
  
  
    addSponsor (formulaire: NgForm) : void {
  
  
  this.formData.append('name', formulaire.value.name);
  this.formData.append('website', formulaire.value.website);
  this.formData.append('logo', formulaire.value.logo);

  
      console.log(this.activatedRoute.parent)
      let link ="admin/events/"+this.eventId+"/sponsors" ;
  
       this.router.navigate([link]);
  
  
   this.sponsorService.addSponsor(+this.eventId,this.formData ).subscribe(
    (response: any) => {
      console.log("Promise resolved with data:", response);
  
      let link ="admin/events/"+this.eventId+"/sponsrs" ;
       this.router.navigate([link]);
  
    },
    (error:any) => {
          console.log("Promise rejected with error:", error);
        }
        );
  
    }
  
  

}
