import { NgModule } from '@angular/core';
import { AsyncPipe, CommonModule, DecimalPipe } from '@angular/common';
import { BookingComponent } from './pages/booking/booking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './services/booking.service';
import { NavigationComponent } from './navs/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { LandingComponent } from './pages/landing/landing.component';
import { NgbCarouselModule, NgbHighlight, NgbModule, NgbPaginationModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './navs/footer/footer.component';
import { NgbAccordionModule } from '@ng-bootstrap/ng-bootstrap';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { AccordionModule } from 'primeng/accordion';
import { AppComponent } from './app.component';
import { AnimateOnScrollModule } from 'primeng/animateonscroll';
import { CalendarModule } from 'primeng/calendar';
import { InputTextModule } from 'primeng/inputtext';
// import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { TagModule } from 'primeng/tag';
import { GridModule, PagerModule } from '@syncfusion/ej2-angular-grids';
import { SkeletonModule } from 'primeng/skeleton';
// import { NgbTableModule } from '@ng-bootstrap/ng-bootstrap/table/table.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';




@NgModule({
  declarations: [
    BookingComponent,
    NavigationComponent,
    LandingComponent,
    FooterComponent,
    ContactComponent,
    AboutUsComponent,
    DashboardComponent
    
  ],
  imports: [
    
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule,
    NgbCarouselModule,
    NgbAccordionModule,
    AccordionModule,
    AnimateOnScrollModule,
    CalendarModule,
    InputTextModule,
    GridModule, 
    PagerModule,
    ButtonModule,
    TagModule,
    DecimalPipe, 
    FormsModule, 
    NgbTypeaheadModule, 
    NgbPaginationModule,
    NgbHighlight,
    AsyncPipe,
    NgbModule,
    SkeletonModule,
    ToastModule

    
  ],
  exports: [
    FooterComponent,
    NavigationComponent,
    ContactComponent
  ],
  providers: [
    BookingService,
    MessageService
  ],
  bootstrap:[AppComponent]
})
export class AppModule { }
