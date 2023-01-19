import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-speakers-item',
  templateUrl: './speakers-item.component.html',
  styleUrls: ['./speakers-item.component.css']
})
export class SpeakersItemComponent implements OnInit {
  @Input() delay! : any ; 
  constructor() { }

  ngOnInit(): void {
  }

}
