import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
import { Session } from '../models/Session';
@Injectable({
  providedIn: 'root'
})
export class SessionService {
  constructor(private http: HttpClient) {}
   
public getSessions(eventId:number):Observable<Session[]>{
  return this.http.post<Session[]>(`${APIS.sessions}`,eventId)
}

public getSessionById(id :number ,eventId:number):Observable<Session>{
  return this.http.post<Session>(`${APIS.sessions}`,[eventId,id])
}

public updateSession(session: Session):Observable<Session>{
  return this.http.put<Session>(`${APIS.sessions}`,session)
}

public addSession(session: Session ):Observable<Session>{
  return this.http.post<Session>(`${APIS.sessions}`,session)
}

public deleteSession(eventId : number,id: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.sessions}/${eventId}/${id}`)
}
}
