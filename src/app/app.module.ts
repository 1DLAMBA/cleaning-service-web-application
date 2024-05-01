import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingComponent } from './pages/booking/booking.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BookingService } from './services/booking.service';
import { NavigationComponent } from './navs/navigation/navigation.component';
import { RouterModule } from '@angular/router';
import { CarouselModule } from 'primeng/carousel';
import { LandingComponent } from './pages/landing/landing.component';
import { NgbCarouselModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './navs/footer/footer.component';


@NgModule({
  declarations: [
    BookingComponent,
    NavigationComponent,
    LandingComponent,
    FooterComponent
    
  ],
  imports: [
    CommonModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CarouselModule,
    RouterModule,
    NgbCarouselModule
    
  ],
  exports: [
    FooterComponent,
    NavigationComponent
  ],
  providers: [
    BookingService
  ]
})
export class AppModule { }
