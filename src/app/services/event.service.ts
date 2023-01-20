import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
import { Event } from '../models/Event';
@Injectable({
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}
   
  public getEvents():Observable<Event[]>{
    return this.http.post<Event[]>(`${APIS.event}/all`,{"id":localStorage.getItem('t')})
  }
  
  public getEventById(id :number):Observable<Event>{
    return this.http.post<Event>(`${APIS.event}/one`,{"id":id})
  }
  
  public updateEvent(formData: Event):Observable<Event>{
    return this.http.put<Event>(`${APIS.event}`,formData)
  }
  
  public addEvent(formData: Event):Observable<Event>{
    return this.http.post<Event>(`${APIS.event}`,formData)
  }
  
  public deleteEvent(eventId : number ):Observable<void>{
    return this.http.delete<void>(`${APIS.event}/${eventId}`)
  }
  }
