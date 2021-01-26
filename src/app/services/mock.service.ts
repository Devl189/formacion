import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ENDPOINTS} from '../constants/constants.constants';
import {of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class MockService {

  constructor(private http: HttpClient) {
  }

  /**
   * @description guarda el formulario
   * @param form
   */
  saveForm(form: any): Observable<{ status: string; message: string; }> {
    // const body = {params: null, body: form};
    // return this.http.post<{ status: 'KO' | 'OK'; message: string; }>(ENDPOINTS.SAVE, body);
    const res = {status: 'OK', message: 'Guardado realizado con exito'};
    return of(res);
  }
}
