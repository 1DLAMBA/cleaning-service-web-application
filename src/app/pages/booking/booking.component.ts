import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  providers: [MessageService]

})
export class BookingComponent {

  buttonLoader: boolean = false;
  BookingFormGroup!: FormGroup;

  constructor(
    private AppointmentEndpoint: BookingService,
    private router: Router,
    private messageService: MessageService
  ){
    this.BookingFormGroup= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date_and_time: new FormControl<Date | null>(null),
      type_of_cleaning: new FormControl('', Validators.required),
      number_of_rooms: new FormControl('', Validators.required),
      // special_requests: new FormControl('', Validators.required),
      additional_comments: new FormControl('', Validators.required),

    })
  }

  notification(message: any, severity: any) {

    this.messageService.add({ severity: severity, detail: message });
  }

  submit(){
    // if(){

    // }
    this.buttonLoader= true;
    
    const formData = {
      name: this.BookingFormGroup.value.name,
      email: this.BookingFormGroup.value.email,
      phone_number: this.BookingFormGroup.value.phone_number,
      address: this.BookingFormGroup.value.address,
      date_and_time: this.BookingFormGroup.value.date_and_time,
      type_of_cleaning: this.BookingFormGroup.value.type_of_cleaning,
      number_of_rooms: this.BookingFormGroup.value.number_of_rooms,
      special_requests:'nill',
      additional_comments: this.BookingFormGroup.value.additional_comments,
    }
    console.log(formData)

    this.AppointmentEndpoint.create(formData).subscribe({
      next: (res: any)=>{
        console.log(res);
        this.notification('Booked!', 'success')
        this.buttonLoader = false;
        window.alert('booked');
        this.router.navigate(['']);

      },
      error: (err: any)=>{
        console.log(err)
        this.buttonLoader = false;

      }
    })
  }

}
