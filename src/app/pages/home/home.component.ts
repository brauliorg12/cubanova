import { Component, HostListener } from '@angular/core';

// Helpers
import { activeItems } from 'src/app/helpers/active-items-nav.helper';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  // Active classess
  public currentSection!: string;

  constructor() {}

  scrollPoint(section: string): void {
    const doc = document.getElementById(section);
    if (doc) {
      doc.scrollIntoView({ behavior: 'smooth' });
    }
  }

  // Window Scroll Event
  @HostListener('window:scroll', ['$event'])
  onscroll() {
    // Active Arrow Down
    // this.arrowDown = scrollY > 500 ? false : true;

    // Active Items NavBar
    this.currentSection = activeItems();
  }
}
