import { Component, OnInit, PipeTransform } from '@angular/core';
import { BookingService } from '../../../services/booking.service';
import { AppointmentResource } from '../../../models/Appointment.model';
import { clear, error, table, time } from 'console';
import { Table } from 'primeng/table';
import { DatePipe, DecimalPipe } from '@angular/common';
import { FormControl } from '@angular/forms';
import { Observable, map, startWith } from 'rxjs';
import { GridComponent, SearchSettingsModel } from '@syncfusion/ej2-angular-grids';
import { debounceTime, distinctUntilChanged, switchMap, filter } from 'rxjs/operators';
import { subscribe } from 'diagnostics_channel';
import { NgbModal, NgbModalConfig } from '@ng-bootstrap/ng-bootstrap';
import * as AOS from 'aos';
import { response } from 'express';




@Component({
  selector: 'app-dashboard',

  templateUrl: './dashboard.component.html',
  styleUrl: './dashboard.component.css',
  providers: [DecimalPipe,NgbModalConfig, NgbModal]
})
export class DashboardComponent implements OnInit {

  searchControl = new FormControl();
  searchResults!: any[];
  searchTerm: string = '';
  appointments: AppointmentResource[] = [];
  filteredAppointments: AppointmentResource[] = [];
  searchText: any = '';
  public searchOptions!: SearchSettingsModel;

  ViewTable:boolean=true;
  tag: any;
  today: String = new Date().toISOString().split('T')[0];
  page = 1;
  pageSize = 4;
  collectionSize!:number;
  buttonLoader1: boolean = false;
  infoLoader: boolean = false;
  filter = new FormControl('', { nonNullable: true });
  singleresult: any;
  buttonLoader2: boolean =false;
  // transformName: this;

  fetchAppointments() {
    this.appoinmentEndpoint.getList().subscribe({
      next: (res: any) => {
        console.log(res.data);
        this.appointments = res.data;
        this.filteredAppointments = res.data;
        this.collectionSize = this.appointments.length;
      },
      error: (err: any) => {
        console.log(err);
      }
    })
  }

  constructor(
    private appoinmentEndpoint: BookingService,
    config: NgbModalConfig,
		private modalService: NgbModal,
  ) {
    this.searchControl.valueChanges.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      filter(searchTerm => !!searchTerm), // Only proceed if searchTerm is truthy
      switchMap(searchTerm => this.appoinmentEndpoint.searchRecords(searchTerm))
    ).subscribe(response => {
      // this.searchResults = 
      this.ViewTable=false
      this.searchResults = response.results;
      this.collectionSize = this.searchResults.length;

      // console.log(this.a);
      
      // this.ngOnInit();
    });

    config.backdrop = 'static';
		config.keyboard = false;

  }



  ngOnInit(): void {
    AOS.init();

    this.searchOptions = { fields: ['name', 'address', 'email'] };
    this.fetchAppointments();
    // this.refreshCountries();
  }

  refreshCountries() {
    this.appointments = this.appointments.slice(
      (this.page - 1) * this.pageSize,
      (this.page - 1) * this.pageSize + this.pageSize
    );
  
  }
  
  search() {
    this.filteredAppointments = this.appointments.filter(appointment =>
      appointment.name.toLowerCase().includes(this.searchText.toLowerCase()) ||
      appointment.address.toLowerCase().includes(this.searchText.toLowerCase()) ||
      appointment.email.toLowerCase().includes(this.searchText.toLowerCase())
    );
  }

  open(content: any, id: any) {
    this.infoLoader = true;
		this.modalService.open(content);
    this.appoinmentEndpoint.view(id).subscribe({
      next: (res: any)=>{
        this.infoLoader = false
        this.singleresult=res.data;
        console.log(this.singleresult);
        
      }, error: (err: any)=>{
        this.infoLoader = false
        
      }
    })
	}

  onSearchTermChange(event: any): void {
    this.appoinmentEndpoint.searchRecords(event.target.value).subscribe({
      next: (res: any)=>{
        this.searchResults=res.results
        this.ViewTable=false
        console.log(this.searchResults)
        this.collectionSize = this.searchResults.length;

      }, error: (err :any)=>{
        this.ViewTable=true

      }
    })
  }

  clearSearch(): void {
    this.searchControl.setValue('');
    this.ViewTable =true // Clear the search input
    this.searchResults = []; // Clear the search results
  }

 


  clear(table: Table) {
    table.clear();
    // this.searchValue = '' 
  }

  updateStatus(id: any, status: any){
    switch (status){
      case 'approve':
        this.buttonLoader1 = true;
        break;
      case 'decline':
        this.buttonLoader2 = true;
        
    }
    this.appoinmentEndpoint.updateStatus(id, status).subscribe({
      next: (response: any)=>{
        this.buttonLoader1 = false;
        this.buttonLoader2 = false;
        this.modalService.dismissAll();
        this.fetchAppointments();
        // window.location.href=`mailto:${email}`
      }, error: (error: any)=>{

      }
    })

  }

  isFutureDate(dateStr: string) {
    const appointmentDate = new Date(dateStr);
    return appointmentDate > new Date();
  }

  isPastDate(dateStr: string) {
    const appointmentDate = new Date(dateStr);
    return appointmentDate < new Date();
  }

  isSameDay(dateStr: string) {
    const appointmentDate = new Date(dateStr);
    const today = new Date();
    return appointmentDate.getDate() === today.getDate() &&
      appointmentDate.getMonth() === today.getMonth() &&
      appointmentDate.getFullYear() === today.getFullYear();
  }



  getSeverity(status: string | any) {
    switch (status.toLowerCase()) {
      case 'unqualified':
        return 'danger';
      case 'qualified':
        return 'success';
      case 'new':
        return 'info';
      case 'negotiation':
        return 'warning';
      case 'renewal':
        return 'null'; // Assuming you meant "null" as a string
      default:
        return 'unknown'; // Return a default value for unmatched statuses
    }
  }

}
