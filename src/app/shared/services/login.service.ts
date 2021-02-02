import {Injectable} from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  constructor() {
  }

  isLogged(): boolean {
    // Llamada al servicio de credenciales, injeccion del token, ...
    return true;
  }
}
