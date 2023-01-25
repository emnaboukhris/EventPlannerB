import { Component, Input, OnInit } from '@angular/core';
import { SponsorService } from 'src/app/services/sponsor.service';
import { Sponsor } from 'src/app/models/Sponsor';
@Component({
  selector: 'app-sponsors',
  templateUrl: './sponsors.component.html',
  styleUrls: ['./sponsors.component.css']
})
export class SponsorsComponent implements OnInit {
  @Input() eventId! :number;
  sponsors!:Sponsor[]

  constructor(private sponsorService : SponsorService) { }

  ngOnInit(): void {
    this.sponsorService.getSponsors(+this.eventId).subscribe(
      (sponsors)=>{
        console.log('sponsors',sponsors)
        this.sponsors=sponsors ; 
        this.sponsors.forEach((sponsor:Sponsor,index:number)=>
        {
          sponsor.logo = 'assets/images/sponsors/sponsor-'+((index%8)+1)+'.png'
        })
      }
    )
  }

}
