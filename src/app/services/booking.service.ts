import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { AppointmentRequest } from '../models/Appointment.model';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) { }

  getList(){
    return this.httpClient.get(`${this.baseUrl}/getlist`)
  }

  create(data: AppointmentRequest){
    return this.httpClient.post(`${this.baseUrl}/book`, data)
  }

  view(id: number){
    return this.httpClient.get(`${this.baseUrl}/view/${id}`)
  }
  
  searchRecords(searchTerm: string): Observable<any> {
    console.log(searchTerm)
    return this.httpClient.get<any>(`${this.baseUrl}/search/${searchTerm}`);
  }

  updateStatus(id: any, status: any){
    return this.httpClient.get(`${this.baseUrl}/appointment/${id}/status/${status}`);
  }
}
