import { Component, HostListener, Input } from '@angular/core';
import { stickyElement } from 'src/app/helpers/sticky-element.helper';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.css'],
})
export class PortFolioComponent {
  @Input() sectionId!: string;
  @Input() currentSection!: string;

  public loading: boolean = true;

  // Window Scroll Event
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    // Esperar a estar en la seccion de cada listado de productos para recien ahi cargarlos
    // y cargarlos una unica vez (Performance)
    if (this.sectionId === this.currentSection && this.loading) {
      this.loading = false;
    }

    // Sticky Element
    stickyElement(
      'sticky-element-portfolio',
      'works', // Trabajos Realizados
      'contact' // Contacto
    );
  }
}
