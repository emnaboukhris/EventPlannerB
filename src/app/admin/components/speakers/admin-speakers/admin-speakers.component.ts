import { ChangeDetectorRef, Component, OnInit } from '@angular/core';
import { Router ,ActivatedRoute} from '@angular/router';
import { BehaviorSubject } from 'rxjs';
import { Speaker } from 'src/app/models/Speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-admin-speakers',
  templateUrl: './admin-speakers.component.html',
  styleUrls: ['./admin-speakers.component.css']
})
export class AdminSpeakersComponent implements OnInit {


  speakers! :Speaker[] ; 
  speakers$ = new BehaviorSubject<any>(this.speakers);


 imageSrc :string ="src\assets\images\profile.jpeg"
 eventId  ="1"
 errorMessage:string=""
 

  addOption() {
    this.router.navigate(['add'], { relativeTo: this.activatedRoute });

  }
    editingIndex = -1;
  
    update(id: number) {
      const link = ['update' ,id] ; 
      console.log("this is the id",id);
      this.router.navigate(link ,{ relativeTo: this.activatedRoute })
    }
  
    delete(id: number) {

      this.speakerService.deleteSpeaker(+this.eventId,id).subscribe((res) => {
        this.speakers.filter(speaker => speaker.id !== id);
        this.speakers$.next(this.speakers);
        console.log("deleted with success");
        this.ngOnInit();
      }, (error)=> {
        console.log("can't delete")

      }
      
      
      )
      // Logic to delete the user at the specified index
    }
  constructor(private activatedRoute: ActivatedRoute,
     private router: Router,
     private speakerService : SpeakerService,
     private cdr: ChangeDetectorRef
 
    ) { }

    ngOnChanges() {
      console.log('Speakers changed')
    }


    

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
