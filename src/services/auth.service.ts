import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'https://localhost:44390/api/Auth';  // Replace with your backend API URL

  constructor(private http: HttpClient) {}

  // Register User
  register(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/register`, { username, password });
  }

  // Login User
  login(username: string, password: string): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, { username, password })
      .pipe(
        map((response: any) => {
          if (response && response.token) {
            localStorage.setItem('token', response.token);  // Save token to localStorage
          }
          return response;
        })
      );
  }

// Logout User
logout(): void {
  localStorage.removeItem('token');  // Remove token from localStorage
}

   // Check if user is logged in
   isLoggedIn(): boolean {
    return !!localStorage.getItem('token');
  }

  // Get the token from localStorage
  getToken(): string | null {
    return localStorage.getItem('token');
  }
}
