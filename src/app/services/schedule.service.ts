import { Injectable } from '@angular/core';
import { Schedule } from '../models/Schedule';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';
@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private http: HttpClient) {}
   
public getSchedules(eventId:number):Observable<Schedule[]>{
  return this.http.post<Schedule[]>(`${APIS.schedules}`,eventId)
}

public getScheduleById(id :number ,eventId:number):Observable<Schedule>{
  return this.http.post<Schedule>(`${APIS.schedules}`,[eventId,id])
}

public updateSchedule(schedule: Schedule):Observable<Schedule>{
  return this.http.put<Schedule>(`${APIS.schedules}`,schedule)
}

public addSchedule(schedule: Schedule ):Observable<Schedule>{
  return this.http.post<Schedule>(`${APIS.schedules}`,schedule)
}

public deleteSchedule(eventId : number,id: number ):Observable<void>{
  return this.http.delete<void>(`${APIS.schedules}${eventId}/${id}`)
}}
