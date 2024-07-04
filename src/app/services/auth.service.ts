import { Observable, of } from 'rxjs';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private apiUrl = 'http://localhost:8080'; // Your backend URL
  private tokenKey = 'authToken'; // Local storage key for JWT token

  constructor(private router: Router, private http: HttpClient) {}

  login({ email, password }: { email: string; password: string }): Observable<any> {
    const headers = new HttpHeaders({
      'Content-Type': 'application/json'
    });

    return this.http.post<string>(`${this.apiUrl}/login`, { email, password }, { headers, responseType: 'text' as 'json' });
  }

  setToken(token: string): void {
    localStorage.setItem(this.tokenKey, token);
  }

  getToken(): string | null {
    return localStorage.getItem(this.tokenKey);
  }

  isLoggedIn(): Observable<boolean> {
    return of(this.getToken() !== null);
  }

  logout(): void {
    localStorage.removeItem(this.tokenKey);
    this.router.navigate(['/logina']);
  }

  hasAnyRole(requiredRoles: string[]): boolean {
    // Implement role checking logic based on token or user roles
    // Example: return true if user has any of the requiredRoles
    return true;
  }
}
