import { Injectable } from '@angular/core';
import { AuthService } from './auth.service';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

  export class UserService {
    private apiUrl = 'https://localhost:44390/api/User';  // Backend API URL
  
    constructor(private http: HttpClient, private authService: AuthService) { }
  
    // Fetch user profile
    getUserProfile(): Observable<any> {
      const token = this.authService.getToken();
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
  
      return this.http.get(`${this.apiUrl}/profile`, { headers });
    }

    updateProfile(file: File, uploadedDateTime: Date): Observable<any> {
      const token = this.authService.getToken();
      const headers = new HttpHeaders({
        'Authorization': `Bearer ${token}`
      });
      const formData = new FormData();
      formData.append('fileUpload', file);
      formData.append('uploadedDateTime', uploadedDateTime.toString());
  
      return this.http.put(`${this.apiUrl}/update-profile`, formData, {headers});
    }
}
