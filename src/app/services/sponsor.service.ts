import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
import { Sponsor } from '../models/Sponsor';

@Injectable({
  providedIn: 'root'
})
export class SponsorService {
  apiConst ='/sponsors/' ; 
  constructor(private http: HttpClient) {}
   
public getSponsors(eventId:number):Observable<Sponsor[]>{
  return this.http.post<Sponsor[]>(`${APIS.event}${this.apiConst}`,[eventId])
}

public getSponsorById(id :number ,eventId:number):Observable<Sponsor>{
  return this.http.post<Sponsor>(`${APIS.event}${this.apiConst}`,[eventId,id])
}

public updateSponsor(eventId: number,formData: FormData):Observable<Sponsor>{
  return this.http.put<Sponsor>(`${APIS.event}${this.apiConst}`,[eventId,formData])
}

public addSponsor(eventId : number ,formData: FormData ):Observable<Sponsor>{
  return this.http.post<Sponsor>(`${APIS.event}${this.apiConst}`,[eventId,formData])
}

public deleteSponsor(eventId : number,id: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.event}${this.apiConst}/${eventId}/${id}`)
}


}
