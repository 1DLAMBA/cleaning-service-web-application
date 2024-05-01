import { Routes } from '@angular/router';
import { LandingComponent } from './pages/landing/landing.component';
import { ServicesComponent } from './pages/services/services.component';

export const routes: Routes = [{
  path: '',
  component: LandingComponent,
  // data: { animation: 'HomePage' }
},
{
  path:'services',
  component: ServicesComponent
}];
