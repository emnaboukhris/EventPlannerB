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
  
  public getEventsAll():Observable<Event[]>{
    return this.http.get<Event[]>(`${APIS.event}`);
  }

  public getEventById(id :number):Observable<Event>{
    return this.http.post<Event>(`${APIS.event}/one`,{"id":id})
  }
  
  public updateEvent(formData: Event):Observable<Event>{
    return this.http.put<Event>(`${APIS.event}`,formData)
  }
  
  public addEvent(formData: any):Observable<Event>{
    let reqBody = {...formData, organizer: localStorage.getItem('t')};
    console.log("this is the data sent with the event created.", reqBody);
    return this.http.post<Event>(`${APIS.event}`,reqBody);
  }
  
  public deleteEvent(eventId : number ):Observable<void>{
    return this.http.delete<void>(`${APIS.event}/${eventId}`)
  }
  }
