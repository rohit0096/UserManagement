import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) { }

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      response => {
        console.log('Login successful:', response);
        this.router.navigate(['/profile']);  // Redirect to profile page
      },
      error => {
        console.error('Login failed:', error);
      }
    );
  }
}
