import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrl: './registration.component.css'
})
export class RegistrationComponent {
  username = '';
  password = '';

  constructor(private authService: AuthService, private router: Router) {}
  onRegister(): void {
    this.authService.register(this.username, this.password).subscribe(
      response => {
        console.log('Registration successful:', response);
      },
      error => {
        console.error('Registration failed:', error);
      }
    );
  }
}
