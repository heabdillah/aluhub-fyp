import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Job } from '../models/job.model';

@Injectable({
  providedIn: 'root'
})
export class JobService {

private apiUrl:string = "http://localhost:8080/api/v1/listJobs";
private apiUrl2:string = "http://localhost:8080/api/v1/addJobs";

constructor(private http: HttpClient) { }

getAll(): Observable<Job[]> {
return this.http.get<Job[]>(this.apiUrl);
  }
  add(body:any){
return this.http.post(this.apiUrl2,body);
  }
  getById(id:number){

  }
}
