// import { routes } from './../app.routes';
// import { CanActivateFn, Router, RouterModule } from '@angular/router';
import { Component,Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class authGuard {
  constructor(private router: Router) {} // Constructor with Router injection

  canActivate(): boolean {
    // Your guard logic here, potentially accessing `this.router` for navigation
    const token = localStorage.getItem('token');
    if (!token/* your authentication check */) {
      this.router.navigate(['/logina']); // Example navigation using Router
      return false;
    }
    return true;
  }
}

