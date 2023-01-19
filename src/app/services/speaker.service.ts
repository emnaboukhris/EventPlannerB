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
  return this.http.post<Speaker[]>(`${APIS.speakers}/all`,{"eventId":eventId})
}

public getSpeakerById(id :number):Observable<Speaker>{
  return this.http.post<Speaker>(`${APIS.speakers}/one`,{"id":id})
}

public updateSpeaker(formData: Speaker):Observable<Speaker>{
  return this.http.put<Speaker>(`${APIS.speakers}`,formData)
}

public addSpeaker(formData: Speaker):Observable<Speaker>{
  return this.http.post<Speaker>(`${APIS.speakers}`,formData)
}

public deleteSpeaker(eventId : number,id: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.speakers}/${id}`)
}

}
