import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class DbService {

  headers = new HttpHeaders({
    'x-token': localStorage.getItem('token')
  });

  pagina = 0;

  readonly URL_SERVER = 'https://vps-1853202-x.dattaweb.com/';

  constructor(
    private http: HttpClient
  ) { }

  checkNumero(data) {
    const URL = this.URL_SERVER.concat('rifa/check_number');

    const form = {
      number: data
    }

    return this.http.post(URL, form,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  checkEmail(data) {
    const URL = this.URL_SERVER.concat('rifa/check_email');

    const form = {
      email: data
    }

    return this.http.post(URL, form,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

  createRifa(data) {
    const URL = this.URL_SERVER.concat('rifa');

    return this.http.post(URL, data,
      { headers: new HttpHeaders({ 'Content-Type': 'application/json' }) });
  }

}
