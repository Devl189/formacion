import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  constructor(private translate: TranslateService) {
    // Lenguaje por defecto
    this.translate.setDefaultLang('es');
    // Lenguaje en uso
    this.translate.use('es');
  }
}
