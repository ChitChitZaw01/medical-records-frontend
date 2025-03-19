import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from '../environments/environment';
import { CommonModule } from '@angular/common';

interface Records {
  patient_id: number;
  doctor_id: number;
  diagnosis: string;
  treatment: string;
  created_at: Date;
}

@Component({
  selector: 'app-dashboard',
  imports: [CommonModule],
  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.scss'
})
export class DashboardComponent {

  private apiUrl = `${environment.apiUrl}`;
  records: Records[] = [];  


  constructor(private http: HttpClient) {}

  message = 'Welcome to your Dashboard!';

  
  ngOnInit() {
    // Fetch players data on component initialization
    this.getRecords().subscribe(
      (data) => {
        this.records = data;  // Store the players data
      },
      (error) => {
        console.error('Error fetching records data:', error);
      }
    );
  }

  // Method to get records data from the API
  getRecords(): Observable<Records[]> {
    return this.http.get<Records[]>(this.apiUrl + '/medical-records');
  }
}
