import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';


@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css'
})
export class BookingComponent {


  BookingFormGroup!: FormGroup;

  constructor(
    private AppointmentEndpoint: BookingService
  ){
    this.BookingFormGroup= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date_and_time: new FormControl('', Validators.required),
      type_of_cleaning: new FormControl('', Validators.required),
      number_of_rooms: new FormControl('', Validators.required),
      special_requests: new FormControl('', Validators.required),
      additional_comments: new FormControl('', Validators.required),

    })
  }

  submit(){
    
    const formData = {
      name: this.BookingFormGroup.value.name,
      email: this.BookingFormGroup.value.email,
      phone_number: this.BookingFormGroup.value.phone_number,
      address: this.BookingFormGroup.value.address,
      date_and_time: this.BookingFormGroup.value.date_and_time,
      type_of_cleaning: this.BookingFormGroup.value.type_of_cleaning,
      number_of_rooms: this.BookingFormGroup.value.number_of_rooms,
      special_requests: this.BookingFormGroup.value.special_requests,
      additional_comments: this.BookingFormGroup.value.additional_comments,
    }

    this.AppointmentEndpoint.create(formData).subscribe({
      next: ()=>{
        
      },
      error: ()=>{

      }
    })
  }

}
