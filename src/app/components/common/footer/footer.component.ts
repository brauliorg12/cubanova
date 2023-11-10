import { Component, HostListener, Input, VERSION } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent {
  @Input() sectionId!: string;
  @Input() currentSection!: string;

  public version = 'Angular ' + VERSION.full;

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
