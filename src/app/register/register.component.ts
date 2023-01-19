import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  constructor(private authService : AuthService, private router: Router, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
  }

   onButtonClick(formulaire: NgForm):void {
    this.authService.register(formulaire.value)
    .then((response) => {
      console.log("Promise resolved with data:", response);
      this.router.navigate(['login']);
    }).catch((error) => {
      console.log("Promise rejected with error:", error);
      //this.toaster.error('Something went wrong. Please check the credentials that you provided and make sure they are correct.');
    });
  }

}
