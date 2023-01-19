import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
import { Speaker } from '../models/Speaker';

@Injectable({
  providedIn: 'root'
})
export class SpeakerService {
   apiConst ='/speakers/' ; 
  constructor(private http: HttpClient) {}
   
public getSpeakers(eventId:number):Observable<Speaker[]>{
  return this.http.post<Speaker[]>(`${APIS.event}${this.apiConst}`,[eventId])
}

public getSpeakerById(idSpeaker :number ,eventId:number):Observable<Speaker>{
  return this.http.post<Speaker>(`${APIS.event}${this.apiConst}`,[eventId,idSpeaker])
}

public updateSpeaker(eventId: number,formData: FormData):Observable<Speaker>{
  return this.http.put<Speaker>(`${APIS.event}${this.apiConst}`,[eventId,formData])
}

public addSpeaker(eventId : number ,formData: FormData ):Observable<Speaker>{
  return this.http.post<Speaker>(`${APIS.event}${this.apiConst}`,[eventId,formData])
}

public deleteSpeaker(eventId : number,idSpeaker: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.event}${this.apiConst}/${eventId}/${idSpeaker}`)
}

}
