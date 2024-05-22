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

  instagram(){
    window.open('https://www.instagram.com/ABCLEANERJANITORIALSERVICE', '_blank');
  }
  facebook(){
    window.open('https://www.facebook.com/share/mv1SzkZdqjSM8i3d/?mibextid=qi2Omg', '_blank');

  }
  email(){
    window.location.href=`mailto:aandcleaner@gmail.com`
  }

}
