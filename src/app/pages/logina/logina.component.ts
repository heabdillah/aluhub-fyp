
import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder, FormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logina',
  standalone: true,
  imports: [
    MatFormFieldModule,
    MatIconModule,
    MatInputModule,
    MatLabel,
    MatButtonModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
FormsModule,

  ],
  templateUrl: './logina.component.html',
  styleUrl: './logina.component.css',
  providers:[AuthService],

})
export class LoginaComponent implements OnInit {
  hide = true;
  errorMessage: string = '';

  loginForm = new FormGroup({
    email: new FormControl<string>('', [Validators.required, Validators.email]),
    password: new FormControl<string>('', [Validators.required]),
  });

  constructor(private auth: AuthService, private router: Router) {}

  ngOnInit(): void {
    if (this.auth.isLoggedIn()) {
      // this.router.navigate(['/schema']);
    }
  }

  onSubmit(): void {
    debugger;
    if (this.loginForm.valid) {
      const loginData = {
        email: this.loginForm.get('email')?.value || '',
        password: this.loginForm.get('password')?.value || ''
      };
      this.auth.login(loginData).subscribe({
        next: (token) => {
          this.auth.setToken(token);
          this.router.navigate(['/schema']);
        },
        error: (error) => {
          console.error(error);
          this.errorMessage = 'Incorrect Email/Password.';
        },
      });
    }
  }

  getErrorMessage() {
    const email = this.loginForm.get('email');
    if (email?.hasError('required')) {
      return 'You must enter a value';
    }
    return email?.hasError('email') ? 'Not a valid email' : '';
  }

  getPErrorMessage() {
    const password = this.loginForm.get('password');
    return password?.hasError('required') ? 'You must enter a value' : '';
  }



}
