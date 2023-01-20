import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { AuthService } from '../services/auth-service.service';
import { CurrentUserService } from '../services/current-user.service';
import { TokenService } from '../services/token.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  public accessDenied : boolean = false;

  constructor(private authService : AuthService,
    private router: Router,
    private activatedRoute: ActivatedRoute, 
    private tokenService:TokenService,
    private currentUserService: CurrentUserService
    ) { }
  

  ngOnInit(): void {
    if(this.authService.isAuthenticated()){
      this.router.navigate(['admin']);
    }
  }

  onButtonClick(formulaire: NgForm): void {
    this.authService.login(formulaire.value)
    .then((response) => {
      console.log("Promise resolved with data:", response);
      localStorage.setItem('access_token',response.access_token);
      this.router.navigate(['']);
      //localStorage.setItem('user',JSON.stringify(this.currentUserService.getUser(response.organizer)));
    }).catch((error) => {
      this.accessDenied = true;
      console.log("Promise rejected with error:", error);

      //this.toaster.error('Something went wrong. Please check the credentials that you provided and make sure they are correct.');
    });

  }

  onButtonClickRegister(){
    this.router.navigate(['register']);
  }
}