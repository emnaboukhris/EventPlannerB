import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NgForm } from '@angular/forms';
import { FormBuilder, Validators } from '@angular/forms';

@Component({
  selector: 'app-event-objectif',
  templateUrl: './event-objectif.component.html',
  styleUrls: ['./event-objectif.component.css']
})


export class EventObjectifComponent implements OnInit {




  firstFormGroup = this._formBuilder.group({
    firstCtrl: ['', Validators.required],
  });
  secondFormGroup = this._formBuilder.group({
    secondCtrl: ['', Validators.required],
  });
 
  constructor(private _formBuilder: FormBuilder, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }
  
  onButtonClick(formulaire: NgForm):void {
    console.log(formulaire.value);
    this.router.navigate(['/admin/event-creation-3', {data: formulaire.value}]);
  }

















  
 

}
