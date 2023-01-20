import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIS } from 'src/app/generics/apis';
import { AuthService } from 'src/app/services/auth-service.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  user: any;
  isAuthenticated : boolean = false;
  constructor(private currentUserService : CurrentUserService,
              private http : HttpClient,
              private authService: AuthService,
              private route : Router ) { }

  ngOnInit(): void {
    this.http.get(APIS.auth+'/meAdmin')
    .subscribe(data => {
      this.user = data;
      localStorage.setItem('t',this.user.id);
      this.isAuthenticated=true;
    });
    console.log("from navbar this is user info" , this.user);
  }

  logout() {
    this.isAuthenticated = false;
    this.authService.logout();
  }

  onButtonClick(){
    this.route.navigate(['register']);
  }

}
