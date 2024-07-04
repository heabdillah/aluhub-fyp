import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Event } from '../models/event.model';

@Injectable({
  providedIn: 'root'
})
export class EventService {

  private apiUrl:string = "http://localhost:8080/api/v1/listFest";
  private apiUrl2:string = "http://localhost:8080/api/v1/addFest";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Event[]> {
    return this.http.get<Event[]>(this.apiUrl);
      }
      add(body:any){
    return this.http.post(this.apiUrl2,body);
      }
      getById(id:number){

      }

}
