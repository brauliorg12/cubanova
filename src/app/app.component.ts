import {
  animate,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  animations: [
    trigger('Fading', [
      state('void', style({ opacity: 0 })),
      state('*', style({ opacity: 0.6 })),
      transition(':enter', animate('800ms ease-out')),
      transition(':leave', animate('100ms ease-in')),
    ]),
  ],
})
export class AppComponent {
  title = 'CubaNova';

  public element = false;

  constructor() {
    window.addEventListener('scroll', this.scroll, true);
  }

  scroll = (event): void => {
    const sc = event.target.scrollingElement.scrollTop;
    if (sc >= 300) {
      this.element = true;
    } else {
      this.element = false;
    }
  };
}
