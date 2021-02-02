import {Injectable} from '@angular/core';
import {CanActivate} from '@angular/router';
import {LoginService} from '../services/login.service';


@Injectable()
export class CanActivateRouteGuard implements CanActivate {

  constructor(private authService: LoginService) {
  }

  canActivate() {
    // Si el usuario on esta logeado se le redirige a la pantalla de error
    if (!this.authService.isLogged()) {
      alert('No estás logueado');
      return false;
    }
    console.log('Estás logueado');
    return true;
  }
}
