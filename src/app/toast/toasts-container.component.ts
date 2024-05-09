import { Component, inject } from '@angular/core';

import { ToastService } from './toast-service';
import { NgTemplateOutlet } from '@angular/common';
import { NgbToastModule } from '@ng-bootstrap/ng-bootstrap';
import { CommonModule } from '@angular/common'; // Import CommonModule
import { NgForOf } from '@angular/common'; // Import NgForOf


@Component({
  selector: 'app-toasts',
  standalone: true,
  imports: [NgbToastModule, NgTemplateOutlet,NgForOf],
  template: `
    <ng-container *ngFor="let toast of toastService.toasts; trackBy: trackById">
      <ngb-toast
        [class]="toast.classname"
        [autohide]="true"
        [delay]="toast.delay || 5000"
        (hidden)="toastService.remove(toast)"
      >
        <ng-template [ngTemplateOutlet]="toast.template"></ng-template>
      </ngb-toast>
    </ng-container>
  `,
  host: { class: 'toast-container position-fixed top-0 end-0 p-3', style: 'z-index: 1200' },
})
export class ToastsContainer {
    constructor(public toastService: ToastService) {}
    trackById(index: number, item: any): any {
      
        return item.id; // Replace with your unique identifier for each toast
      }
}