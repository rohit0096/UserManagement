import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
  export class ProfileComponent implements OnInit {
    userProfile: any={
    userName: '',
    }
    file: File | null = null;
    uploadedDateTime: Date = new Date();

    constructor(private userService: UserService,private authService:AuthService) { }

    onFileChange(event: any): void {
      this.file = event.target.files[0];
    }

  
    ngOnInit(): void {
      this.userService.getUserProfile().subscribe(
        data => {
        console.log('API Response:', data);  
        this.userProfile = data;
        console.log('Username:', this.userProfile.username);  // Check if username is correctly assigned
        },
        error => {
          console.error('Failed to fetch profile:', error);
        }
      );
    }
   
    onSubmit(): void {
    // Check if the user is logged in
     if (!this.authService.isLoggedIn()) {
     alert('User is not logged in');
     return; // Stop the process if the user is not logged in
    }
      if (this.file && this.uploadedDateTime) {
        this.userService.updateProfile(this.file, this.uploadedDateTime)
          .subscribe(
            response => {
              alert('Profile updated successfully');
              window.location.reload();
              //console.log('Profile updated successfully', response);
            },
            error => {
              alert('Error updating profile');
              console.error('Error updating profile', error);
            }
          );
      } else {
        alert('No file selected');
      }
    }

    
    logout(): void {
      this.authService.logout();
    }
}
