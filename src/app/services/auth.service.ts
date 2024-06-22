import { Observable } from 'rxjs';
import { LoginaComponent } from './../pages/logina/logina.component';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
private apiUrl = 'http://localhost:8080/login';


  constructor(private http: HttpClient) {}
  public httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

// login(userCredentials: any): Observable<any>{
//   return this.http.post(this.apiUrl,userCredentials);
// }
login(email: string, password: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const body = { email, password };

  return this.http.post<any>(this.apiUrl, body, this.httpOptions);
}

}
