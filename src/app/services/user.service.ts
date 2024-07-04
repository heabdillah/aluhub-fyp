import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { HttpClientModule } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class UserService {


  private userURL = "http://localhost:8080/api/v1/users";
  private roleURL = "http://localhost:8080/api/v1/roles";

  constructor(private http: HttpClient) {}

  getUserRoles(email: string): Observable<string[]> {
    return this.http.get<string[]>(`${this.userURL}/${email}`);
  }

  add(body: any): Observable<any> {
    return this.http.post<any>(this.userURL, body);
  }

  get(): Observable<any[]> {
    return this.http.get<any[]>(this.userURL);
  }

  getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.userURL}/id/${id}`);
  }

  delete(email: string): Observable<any> {
    return this.http.delete<any>(`${this.userURL}/${email}/true`);
  }

  addRole(body: any): Observable<any> {
    return this.http.post<any>(this.roleURL, body);
  }

  getRoles(): Observable<any[]> {
    return this.http.get<any[]>(this.roleURL);
  }

  }
