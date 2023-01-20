import { Component, Input, OnInit } from '@angular/core';
import { Speaker } from 'src/app/models/Speaker';

@Component({
  selector: 'app-speakers-item',
  templateUrl: './speakers-item.component.html',
  styleUrls: ['./speakers-item.component.css']
})
export class SpeakersItemComponent implements OnInit {
  @Input() speaker! : Speaker ; 
  constructor() { }

  ngOnInit(): void {
  }

}
