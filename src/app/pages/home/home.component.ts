import { Component, VERSION } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent {
  public version = 'Angular ' + VERSION.full;

  constructor() {}

  scrollPoint(section: string): void {
    const doc = document.getElementById(section);
    if (doc) {
      doc.scrollIntoView({ behavior: 'smooth' });
    }
  }
}
