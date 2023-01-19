import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
import { TokenService } from './token.service';
import { CurrentUserService } from './current-user.service';
import { User } from '../models/User';
import { Admin } from '../models/admin';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient,
     private tokenService: TokenService,
     private currentUserService: CurrentUserService
     ) { }


  async register(credentials:User): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(credentials.organizer===true){
      this.currentUserService.setRole("admin");
      const admin = new Admin(1,credentials.firstName,credentials.lastName,credentials.email,credentials.password);
      const jsonString = JSON.stringify(admin);
      console.log(admin);
      console.log(APIS.auth+'/register/admin');
      return await this.http.post(APIS.auth+'/register/admin', jsonString, { headers }).toPromise();
    }
    else{
      this.currentUserService.setRole("user");
      console.log("this is a user");
      return this.http.post(APIS.auth+'/register',{});
    }
   // return this.http.post(APIS.event, testData);
  }

  async login(credentials:any): Promise<any> {
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(credentials.organizer===true){
      localStorage.setItem("isOrganizer","true");
      const data = { email : credentials.email,
                     password : credentials.password};
      const jsonString = JSON.stringify(data);
      console.log(jsonString);
      return await this.http.post(APIS.auth+'/login/admin', jsonString, { headers }).toPromise();
    }
    else{
      console.log("this is a user");
      return this.http.post(APIS.auth+'/register',{});
    }
  }

  isAuthenticated(): boolean{
    if(localStorage.getItem("access_token")!=""){
      return true;
    }
    else{
      return false;
    }
  }

}
