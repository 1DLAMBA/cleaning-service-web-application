import { Component, TemplateRef, inject } from '@angular/core';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-navigation',
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})
export class NavigationComponent {
  private modalService = inject(NgbModal);

  openFullscreen(content: TemplateRef<any>) {
		this.modalService.open(content, { fullscreen: true });
	}
}
