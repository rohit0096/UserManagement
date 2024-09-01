import { Component, OnInit } from '@angular/core';
import { UserService } from '../../services/user.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrl: './profile.component.css'
})
  export class ProfileComponent implements OnInit {
    userProfile: any;
  
    constructor(private userService: UserService) { }
  
    ngOnInit(): void {
      this.userService.getUserProfile().subscribe(
        data => {
          this.userProfile = data;
        },
        error => {
          console.error('Failed to fetch profile:', error);
        }
      );
    }
}
