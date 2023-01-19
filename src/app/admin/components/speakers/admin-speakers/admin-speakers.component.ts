import { Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { Speaker } from 'src/app/models/Speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-admin-speakers',
  templateUrl: './admin-speakers.component.html',
  styleUrls: ['./admin-speakers.component.css']
})
export class AdminSpeakersComponent implements OnInit {
  speake : any[] = [{
    id:'1',
    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"boukh",
    gender:"femme", 
    birthday:"1234:55:5",
    job:"artist" , 
    company:"jbc" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } , 
  {
    id:'1',

    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"flutter intro ",
    gender:"teeeeeeeeeeeee", 
    birthday:"1234:55:5",
    job:"1234:55:5" , 
    company:"emna" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } ,
  {
    id:'1',

    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"flutter intro ",
    gender:"teeeeeeeeeeeee", 
    birthday:"1234:55:5",
    job:"1234:55:5" , 
    company:"emna" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } ,
  {
    id:'1',

    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"flutter intro ",
    gender:"teeeeeeeeeeeee", 
    birthday:"1234:55:5",
    job:"1234:55:5" , 
    company:"emna" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } ,
  {
    id:'1',

    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"flutter intro ",
    gender:"teeeeeeeeeeeee", 
    birthday:"1234:55:5",
    job:"1234:55:5" , 
    company:"emna" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } ,{
    id:'1',

    image :"https://s3.eu-central-1.amazonaws.com/bootstrapbaymisc/blog/24_days_bootstrap/sheep-3.jpg",
   firstname :"flutter ",
    lastname:"flutter intro ",
    gender:"teeeeeeeeeeeee", 
    birthday:"1234:55:5",
    job:"1234:55:5" , 
    company:"emna" , 
    description : "fffffffffffffffffffffffff", 
    email:"emna@gmail.com" , 
    facebookLink : "rrzr",
    instaLink :"ggggggggh",
    linkedinLink :"linkedIn"

  } 


 
]

 speakers! :Speaker[] ; 


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

      this.speakerService.deleteSpeaker(+this.eventId,id).subscribe((res) => {
        console.log("deleted with success")
      }, (error)=> {
        console.log("can't delete")

      }
      
      
      )
      // Logic to delete the user at the specified index
    }
  constructor(    private activatedRoute: ActivatedRoute, private router: Router,
    
    private speakerService : SpeakerService 
 
    ) { }


    

  ngOnInit(): void {

    this.activatedRoute.parent?.parent?.params.subscribe(
      (params)=> {
        console.log("params :" , params['idEvent'])
      this.eventId =params['idEvent'] ; 
      this.speakerService.getSpeakers(+this.eventId).subscribe((speakers: Speaker[]) => {
this.speakers = speakers ; 
      }) ; 

      },
      (error)=>{
        console.log(error)
        this.errorMessage="probleme de connexion à votre serveur" ; 
      
      }

  )
  }
 

}
