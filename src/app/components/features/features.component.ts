import { Component, HostListener, Input } from '@angular/core';

@Component({
  selector: 'app-features',
  templateUrl: './features.component.html',
  styleUrls: ['./features.component.css'],
})
export class FeaturesComponent {
  @Input() sectionId!: string;
  @Input() currentSection!: string;

  //   public productsSlider: Clientes[] = [];
  public loading = true;

  // Window Scroll Event
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    // Esperar a estar en la seccion de cada listado de productos para recien ahi cargarlos
    // y cargarlos una unica vez (Performance)
    if (this.sectionId === this.currentSection && this.loading) {
      this.loading = false;
    }
  }

  scrollPoint(section: string): void {
    const doc = document.getElementById(section);
    if (doc) {
      doc.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
