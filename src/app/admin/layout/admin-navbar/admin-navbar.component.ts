import { Component, OnInit } from '@angular/core';
import { CurrentUserService } from 'src/app/services/current-user.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { APIS } from 'src/app/generics/apis';
@Component({
  selector: 'app-admin-navbar',
  templateUrl: './admin-navbar.component.html',
  styleUrls: ['./admin-navbar.component.css']
})
export class AdminNavbarComponent implements OnInit {

  user: any;
  constructor(private currentUserService : CurrentUserService,
              private http : HttpClient) { }

  ngOnInit(): void {
    this.http.get(APIS.auth+'/meAdmin')
    .subscribe(data => {
      this.user = data;
      localStorage.setItem('t',this.user.id);
    });
    console.log("from navbar this is user info" , this.user);
  }

}
