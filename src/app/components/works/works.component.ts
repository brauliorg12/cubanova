import { Component, HostListener, Input } from '@angular/core';
import { stickyElement } from 'src/app/helpers/sticky-element.helper';

@Component({
  selector: 'app-works',
  templateUrl: './works.component.html',
  styleUrls: ['./works.component.css'],
})
export class WorksComponent {
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
      'sticky-element-filter',
      'services', // Trabajos Realizados
      'portfolio' // Contacto
    );
  }
}
