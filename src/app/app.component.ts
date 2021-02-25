import { animate, state, style, transition, trigger } from '@angular/animations';
import { Component } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { DbService } from './services/db.service';
import Swal from 'sweetalert2';
import { find, pull } from 'lodash';

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
    ])
  ],
})
export class AppComponent {
  title = 'cubanova';

  public element = false;

  public Form: FormGroup;

  loading = 'ok';
  loadingE = 'ok';
  loadingData = '';
  disponible = false;
  disponibleE = false;
  disponibleData = false;

  tags: string[] = [];

  constructor(
    public formBuilder: FormBuilder,
    private dbservice: DbService
  ) {
    window.addEventListener('scroll', this.scroll, true);

    this.Form = this.formBuilder.group({
      number: new FormControl('', Validators.compose([
        Validators.minLength(4),
        Validators.maxLength(4),
        Validators.required
      ])),
      email: new FormControl('', Validators.compose([
        Validators.minLength(5),
        Validators.required
      ])),
      nombre: [''],
      telefono: [''],
      // img: ['', Validators.required],
      img: [''],
      tag: [undefined],

    });
  }

  addTag(tag: string): void {
    if (this.Form.get('number').valid && this.disponible) {
      this.loading = '';

      const findIndex = this.tags.findIndex(p => p === tag);

      if (findIndex === -1) {
        if (tag[tag.length - 1] === ',' || tag[tag.length - 1] === ' ') {
          tag = tag.slice(0, -1);
          this.Form.controls.number.setValue('');
          this.Form.controls.tag.setValue(this.tags);
        }
        if (tag.length > 0 && !find(this.tags, tag)) {
          this.tags.push(tag);
          this.Form.controls.number.setValue('');
          this.Form.controls.tag.setValue(this.tags);
        }
      }
    }
  }

  removeTag(tag?: string): void {
    if (!!tag) {
      pull(this.tags, tag);
    } else {
      this.tags.splice(-1);
    }
  }

  checkNumber(): void {
    this.loading = '';
    if (this.Form.get('number').valid) {
      this.loading = 'loading';
      this.disponible = false;

      this.dbservice.checkNumero(this.Form.get('number').value).toPromise().then((resp: any) => {
        // console.log(resp);

        if (resp.ok) {
          if (resp.result === 'disponible') {
            this.disponible = true;
            this.loading = 'ok';
          } else {
            this.disponible = false;
            this.loading = 'nodisponible';
          }
        }

      });
    }
  }

  checkEmail(): void {
    if (this.Form.get('email').valid) {
      this.loadingE = 'loading';
      this.disponibleE = false;

      this.dbservice.checkEmail(this.Form.get('email').value).toPromise().then((resp: any) => {
        // console.log(resp);

        if (resp.ok) {
          if (resp.result === 'disponible') {
            this.disponibleE = true;
            this.loadingE = 'ok';
          } else {
            this.disponibleE = false;
            this.loadingE = 'nodisponible';
          }
        }

      });
    }
  }

  alert(titles: string, texts: string, icons: any): void {
    Swal.fire({
      title: titles,
      text: texts,
      icon: icons,
      showCancelButton: false
    });
  }

  sendData(): void {
    if ((this.Form.valid) || (this.Form.get('email').valid && this.tags.length >= 1)) {
      this.loadingData = 'loading';
      this.disponibleData = false;

      this.dbservice.createRifa(this.Form.value).toPromise().then((resp: any) => {
        // console.log(resp);

        if (resp.ok) {
          this.Form.reset();
          this.tags = [];
          this.disponibleData = true;
          this.loadingData = 'ok';

          this.alert('¡Reserva Realizada!', 'Envíanos un email a fabianleon8526@gmail.com adjuntando el comprobante de pago para finalizar la reserva de los números, ¡Mucha Suerte!, Te enviamos un email con los números agregados', 'success');
        } else {
          this.disponibleData = false;
          this.loadingData = 'nodisponible';

          if (resp.err) {
            this.alert('¡Ocurrio un error!', 'Intente nuevamente quizás se ocupó uno o más números', 'error');
          } else {
            this.alert('¡Ocurrio un error!', 'Intente nuevamente quizás se ocupó uno o más números', 'error');
          }


        }
      });
    }
  }


  scroll = (event): void => {
    const sc = event.target.scrollingElement.scrollTop;
    if (sc >= 300) {
      this.element = true;
    }
    else {
      this.element = false;
    }
  }


}
