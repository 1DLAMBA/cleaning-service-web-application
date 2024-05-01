import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from '../environment/environment';
import { AppointmentRequest } from '../models/Appointment.model';


@Injectable({
  providedIn: 'root'
})
export class BookingService {
  baseUrl = `${environment.apiUrl}`;

  constructor(private httpClient: HttpClient) { }

  getList(){
    return this.httpClient.get(`${this.baseUrl}/book`)
  }

  create(data: AppointmentRequest){
    return this.httpClient.post(`${this.baseUrl}/book`, data)
  }

  view(id: number){
    return this.httpClient.get(`${this.baseUrl}/book/${id}`)
  }

}
