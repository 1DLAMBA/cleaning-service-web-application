import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AppModule } from './app.module';
import { ToastModule } from 'primeng/toast';
import { MessageService } from 'primeng/api';
import { ToastsContainer } from './toast/toasts-container.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AppModule, ToastModule, ToastsContainer],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MessageService]
})
export class AppComponent {
  title = 'A_and_B-cleaning-service-webApp';
}
