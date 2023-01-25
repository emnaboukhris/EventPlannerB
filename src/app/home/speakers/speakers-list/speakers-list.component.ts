import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/models/Speaker';
import { SpeakerService } from 'src/app/services/speaker.service';

@Component({
  selector: 'app-speakers-list',
  templateUrl: './speakers-list.component.html',
  styleUrls: ['./speakers-list.component.css']
})
export class SpeakersListComponent implements OnInit {
  @Input() eventId! :number;
  
  speakers!: Speaker[] ; 
  constructor(private speakerService : SpeakerService) { }

  ngOnInit(
  
  ): void {
this.speakerService.getSpeakers(this.eventId).subscribe(
  (speakers)=>{
    this.speakers=speakers ;
    this.speakers.forEach((speaker:Speaker,index:number)=>
    {
      speaker.image = 'assets/images/speakers/speaker'+((index % 8)+1)+'jpg';
    })  
  }
)
  }

}
