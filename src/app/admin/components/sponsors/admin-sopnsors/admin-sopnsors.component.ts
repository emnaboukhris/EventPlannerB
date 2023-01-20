import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Speaker } from 'src/app/models/Speaker';
import { Sponsor } from 'src/app/models/Sponsor';
import { SponsorService } from 'src/app/services/sponsor.service';

@Component({
  selector: 'app-admin-sopnsors',
  templateUrl: './admin-sopnsors.component.html',
  styleUrls: ['./admin-sopnsors.component.css']
})
export class AdminSopnsorsComponent implements OnInit {

  sponsors! :Sponsor[] ; 


  imageSrc :string ="src\assets\images\profile.jpeg"
  eventId  ="1"
  errorMessage:string=""
  
 
   addOption() {
     this.router.navigate(['add'], { relativeTo: this.activatedRoute });
 
   }
     editingIndex = -1;
   
     update(id: number) {
       const link = ['update' ,id] ; 
       this.router.navigate(link ,{ relativeTo: this.activatedRoute })
     }
   
     delete(id: number) {
 
       this.sponsorService.deleteSponsor(id).subscribe((res) => {
         console.log("deleted with success")
         this.ngOnInit();
       }, (error)=> {
         console.log("can't delete")
 
       }
       
       
       )
       // Logic to delete the user at the specified index
     }
   constructor(    private activatedRoute: ActivatedRoute, private router: Router,
     
     private sponsorService : SponsorService 
  
     ) { }
 
 
     
 
   ngOnInit(): void {
 
     this.activatedRoute.parent?.parent?.params.subscribe(
       (params)=> {
         console.log("params :" , params['idEvent'])
       this.eventId =params['idEvent'] ; 
       this.sponsorService.getSponsors(+this.eventId).subscribe((sponsors: Sponsor[]) => {
       this.sponsors = sponsors ; 
       this.sponsors.forEach((sponsor:Sponsor,index:number)=>{
        sponsor.logo = 'assets/images/sponsors/sponsor-'+((index % 8)+1)+'.png'
       })

       }) ; 
 
       },
       (error)=>{
         console.log(error)
         this.errorMessage="probleme de connexion à votre serveur" ; 
       
       }
 
   )
   }
  
 
 
}
