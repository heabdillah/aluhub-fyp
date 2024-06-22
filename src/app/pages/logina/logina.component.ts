import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators, ReactiveFormsModule, FormBuilder } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule, MatLabel } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';
import { HttpClientModule } from '@angular/common/http';

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

  ],
  templateUrl: './logina.component.html',
  styleUrl: './logina.component.css',
  providers:[AuthService],

})
export class LoginaComponent implements OnInit {
  loginForm!: FormGroup

constructor(private router: Router, private authservice: AuthService, private fb: FormBuilder){this.loginForm = this.fb.group({
  email: ['', [Validators.required, Validators.email]],
  password: ['', [Validators.required]]
});}


ngOnInit(): void {
}

onLogin(): void {
  const email = this.loginForm.get('email')?.value;
  const password = this.loginForm.get('password')?.value;

  this.authservice.login(email, password).subscribe(
    (    response: any) => {
      console.log('success response =>', response);
      localStorage.setItem('token', 'base64Token');
      this.router.navigateByUrl('/');
    },
    (    error: any) => {
      console.log('error =>', error);
    }
  );

}
  
}
