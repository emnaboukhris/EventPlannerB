import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { APIS } from '../generics/apis';

@Injectable({
  providedIn: 'root'
})
export class CurrentUserService {

  user : any;
  role : any;
  constructor(private http: HttpClient ) { }

  setRole(role:string){
    this.role=role;
  }

  storeUser(user:any){
    this.user = user;
  }

  getUser(){
        const isOrganizer = localStorage.getItem("isOrganizer");
        if(isOrganizer == "true"){
        this.http.get(APIS.auth+'/meAdmin')
        .subscribe(data => {
          this.user = data;
        });
        return this.user;
      }


  }

  async setUserInfo(access_token:string): Promise<any>{
    
    const headers = new HttpHeaders().set('Content-Type', 'application/json');
    if(this.role=="admin"){
      this.user =  await this.http.get(APIS.auth+'/meAdmin').toPromise();
    }
  }

}
