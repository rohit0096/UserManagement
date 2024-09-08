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
        alert('Registration successful!');
        this.router.navigate(['/login']);  // Redirect to login page
        console.log('Registration successful:', response);
      },
      error => {
        // On registration failure
        const errorMessages = error.error.map((er: any) => er.description).join('\n');   
        alert(`Registration failed! \n${errorMessages}`); 
        console.error('Registration error:', error.code);
      }
    );
  }
}
