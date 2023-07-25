import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  title = 'CubaNova';

  constructor() {}

  scrollPoint(section: string) {
    // document.getElementById(section).scrollIntoView({behavior: "smooth"});
    document.getElementById(section).scrollIntoView();
  }
}
