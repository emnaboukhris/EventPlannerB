import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
@Component({
  selector: 'app-publish-event',
  templateUrl: './publish-event.component.html',
  styleUrls: ['./publish-event.component.css']
})
export class PublishEventComponent implements OnInit {
  eventId! :number;

  constructor(private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.activatedRoute!.params.subscribe(

      (params)=>{
        this.eventId= params["id"]
        console.log("myeventid",this.eventId)
      }
    )
  }
   
}
