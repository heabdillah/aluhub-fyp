import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Alumni } from '../models/alumni.model';

@Injectable({
  providedIn: 'root'
})
export class AlumniService {
  private apiUrl:string = "http://localhost:8080/api/v1/users";

  constructor(private http: HttpClient) { }

  getAll(): Observable<Alumni[]> {
    return this.http.get<Alumni[]>(this.apiUrl);
      }
}
