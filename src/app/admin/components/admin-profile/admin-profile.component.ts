import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { APIS } from 'src/app/generics/apis';

@Component({
  selector: 'app-admin-profile',
  templateUrl: './admin-profile.component.html',
  styleUrls: ['./admin-profile.component.css']
})
export class AdminProfileComponent implements OnInit {

  constructor(private http : HttpClient) { }

  user : any;
  ngOnInit(): void {
    this.http.get(APIS.auth+'/meAdmin')
    .subscribe(data => {
      this.user = data;
    });
  }

}
