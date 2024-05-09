import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';
import { ContactComponent } from './pages/contact/contact.component';
import { AboutUsComponent } from './pages/about-us/about-us.component';
import { BookingComponent } from './pages/booking/booking.component';
import { DashboardComponent } from './pages/admin/dashboard/dashboard.component';
import { NgbdToastGlobal } from './toast/toast-global.component';

export const routes: Routes = [{
  path: '',
  component: LandingComponent,
  // data: { animation: 'HomePage' }
},
{
  path: 'services',
  component: ServicesComponent
},
{
  path: 'contact',
  component: ContactComponent
},
{
  path: 'about',
  component: AboutUsComponent
},
{
  path: 'booking',
  component: BookingComponent
},
{
  path: 'admin',
  component: DashboardComponent
},
{
  path: 'toast',
  component: NgbdToastGlobal
},
];
