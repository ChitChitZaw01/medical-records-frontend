// src/app/auth.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from './environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = `${environment.apiUrl}/auth/login`;

  constructor(private http: HttpClient, 
    //private jwtHelper: JwtHelperService

  ) {}

  login(username: string, password: string): Observable<any> {
     return this.http.post<any>(this.apiUrl, { username, password });
    // return this.http.post<any>('/api/login', {username, password});
            // this is just the HTTP call, 
            // we still need to handle the reception of the token
            // .shareReplay();
  }

  saveToken(token: string): void {
    localStorage.setItem('access_token', token);
  }

  getToken(): string | null {
    return localStorage.getItem('access_token');
  }

  // isAuthenticated(): boolean {
  //   const token = this.getToken();
  //   return token ? !this.jwtHelper.isTokenExpired(token) : false;
  // }

  logout(): void {
    localStorage.removeItem('access_token');
  }
  
}
