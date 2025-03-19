import { Component } from '@angular/core';
import { AuthService } from '../auth.service';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms'; 
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-login',
  imports: [FormsModule,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})

export class LoginComponent {
  username: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login(): void {
    this.authService.login(this.username, this.password).subscribe(
      (response) => {
        this.authService.saveToken(response.access_token);
        console.log('Access token = ' + response.access_token);
        this.router.navigate(['/dashboard']); // Redirect to a protected route
      },
      (error) => {
        this.errorMessage = 'Invalid credentials';
      }
    );
  }
}

