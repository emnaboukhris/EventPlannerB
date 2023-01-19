import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { APIS } from '../generics/apis';


@Injectable({
  providedIn: 'root'
})
export class EventsService {

  constructor(private http: HttpClient) { }

  createEvent(eventDetails:any): Observable<any> {
    
    // Creating JSON for post call:
    const testData = {
      "title":"Event Test 3 frontend",
      "dateStart":"2022-01-01 10:00:00",
      "dateEnd":"2022-01-02 10:00:00",
      "isFree":true,
      "organizer": {
          "id":1,
          "email": "emna@gmail.com", 
          "password": "emna",
          "firstName":"emna",
          "lastName":"boukhris"
      }
  };
    return this.http.post(APIS.event, testData);
  }
}
