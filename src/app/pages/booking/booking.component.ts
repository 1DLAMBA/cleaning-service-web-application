import { Component, OnDestroy, OnInit, TemplateRef, inject } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BookingService } from '../../services/booking.service';
import { RouterLink } from '@angular/router';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { NgbToast } from '@ng-bootstrap/ng-bootstrap';
import { ToastService } from '../../toast/toast-service';



@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrl: './booking.component.css',
  providers: [MessageService],
  

})
export class BookingComponent implements OnInit, OnDestroy{
	toastService = inject(ToastService);
 
  buttonLoader: boolean = false;
  BookingFormGroup!: FormGroup;
  serviceType: any;

  constructor(
    private AppointmentEndpoint: BookingService,
    private router: Router,
    private messageService: MessageService,
  ){
    this.BookingFormGroup= new FormGroup({
      name: new FormControl('', Validators.required),
      email: new FormControl('', Validators.required),
      phone_number: new FormControl('', Validators.required),
      address: new FormControl('', Validators.required),
      date_and_time: new FormControl<Date | null>(null),
      type_of_cleaning: new FormControl('', Validators.required),
      customType: new FormControl(''),
      number_of_rooms: new FormControl('', Validators.required),
      // special_requests: new FormControl('', Validators.required),
      additional_comments: new FormControl(''),

    })
  }


  ngOnInit(): void {
    
  }

  showNotif(template: TemplateRef<any>, severity: any) {
		this.toastService.show({ template, classname: `${severity} text-light`, delay: 10000 });
	}
  submit(success: TemplateRef<any>, failure: TemplateRef<any>){
    // if(){

    // }
    this.buttonLoader= true;

    if (this.BookingFormGroup.value.type_of_cleaning == 'Custom Type'){
      this.serviceType = this.BookingFormGroup.value.customType

      const formData = {
        name: this.BookingFormGroup.value.name,
        email: this.BookingFormGroup.value.email,
        phone_number: this.BookingFormGroup.value.phone_number,
        address: this.BookingFormGroup.value.address,
        date_and_time: this.BookingFormGroup.value.date_and_time,
        type_of_cleaning: this.serviceType,
        number_of_rooms: this.BookingFormGroup.value.number_of_rooms,
        special_requests:'nill',
        additional_comments: this.BookingFormGroup.value.additional_comments,
      }
      console.log(formData)
  
      this.AppointmentEndpoint.create(formData).subscribe({
        next: (res: any)=>{
          console.log(res);
          // this.notification('Booked!', 'success')
          this.showNotif(success, ' success-toast')
          this.buttonLoader = false;
          // window.alert('booked');
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
  
        },
        error: (err: any)=>{
          console.log(err)
          this.buttonLoader = false;
          this.showNotif(failure, 'error-toast')
  
  
        }
      })
      console.log('CONDITION 1');
      
      return;
      
    } else {
      this.serviceType = this.BookingFormGroup.value.type_of_cleaning
      const formData = {
        name: this.BookingFormGroup.value.name,
        email: this.BookingFormGroup.value.email,
        phone_number: this.BookingFormGroup.value.phone_number,
        address: this.BookingFormGroup.value.address,
        date_and_time: this.BookingFormGroup.value.date_and_time,
        type_of_cleaning: this.serviceType,
        number_of_rooms: this.BookingFormGroup.value.number_of_rooms,
        special_requests:'nill',
        additional_comments: this.BookingFormGroup.value.additional_comments,
      }
      console.log(formData)
  
      this.AppointmentEndpoint.create(formData).subscribe({
        next: (res: any)=>{
          console.log(res);
          // this.notification('Booked!', 'success')
          this.showNotif(success, ' success-toast')
          this.buttonLoader = false;
          // window.alert('booked');
          setTimeout(() => {
            this.router.navigate(['']);
          }, 2000);
        },
        error: (err: any)=>{
          console.log(err)
          this.buttonLoader = false;
          this.showNotif(failure, 'error-toast')
  
  
        }
      })
    }
    console.log('CONDITION 2');

    

  }
  ngOnDestroy(): void {
		this.toastService.clear();
	}

}
