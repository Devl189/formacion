import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  public title = 'APP.TITLE';
  public title2: string;
  public param = {value: 'Paco'};

  constructor(private translate: TranslateService) {
    // Lenguaje por defecto
    this.translate.setDefaultLang('es');
    // Lenguaje en uso
    this.translate.use('es');
  }

  ngOnInit() {
    // Obtencion de las traducciones a traves del servicio
    this.title2 = this.translate.instant('APP.TITLE');
    this.translate.get('APP.HELLO', {value: 'Antonio'}).subscribe((res: string) => {
      console.log(res);
    });
  }
}
