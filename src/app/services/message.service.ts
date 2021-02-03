import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class MessageService {
  // Es el encargado de emitir los eventos
  private subject = new Subject<any>();

  /**
   * @description funcion que se encarga de enviar los mensajes
   * @param message
   */
  sendMessage(message: string) {
    this.subject.next({ text: message });
  }

  /**
   * @description funcion que se encarga de vaciar los mensajes
   */
  clearMessages() {
    this.subject.next();
  }

  /**
   * @description funcion que se encarga de recepcionar los cambios de estado del observable
   */
  getMessage(): Observable<any> {
    return this.subject.asObservable();
  }
}
