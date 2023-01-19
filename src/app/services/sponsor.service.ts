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
  return this.http.post<Sponsor[]>(`${APIS.sponsors}`,eventId)
}

public getSponsorById(id :number ,eventId:number):Observable<Sponsor>{
  return this.http.post<Sponsor>(`${APIS.sponsors}`,[eventId,id])
}

public updateSponsor(formData: Sponsor):Observable<Sponsor>{
  return this.http.put<Sponsor>(`${APIS.sponsors}`,formData)
}

public addSponsor(formData: Sponsor ):Observable<Sponsor>{
  return this.http.post<Sponsor>(`${APIS.sponsors}`,formData)
}

public deleteSponsor(eventId : number,id: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.sponsors}/${eventId}/${id}`)
}


}
