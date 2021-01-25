import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormField} from '../../shared/models/interfaces';
import {Title} from '../../shared/models/title.model';
import {MockService} from '../../services/mock.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'APP.TITLE';
  public title2: string;
  public param = {value: 'Paco'};
  public tiles: Title[] = [];
  public formFields: FormField[] = [];

  constructor(private translate: TranslateService, private mock: MockService) {
  }

  ngOnInit() {
    // Obtencion de las traducciones a traves del servicio
    this.title2 = this.translate.instant('APP.TITLE');
    this.translate.get('APP.HELLO', {value: 'Antonio'}).subscribe((res: string) => {
      console.log(res);
    });

    // Inicializacion variables
    this.tiles = [
      {text: 'One', cols: 3, rows: 1, color: 'lightblue'},
      {text: 'Two', cols: 1, rows: 2, color: 'lightgreen'},
      {text: 'Three', cols: 1, rows: 1, color: 'lightpink'},
      {text: 'Four', cols: 2, rows: 1, color: '#DDBDF1'},
    ];

    this.formFields = [
      {type: 'input', id: 'nombre', mandatory: true, label: 'Nombre'},
      {type: 'date', id: 'fecha_nac', mandatory: false, label: 'Fecha Nacimiento'}
    ];
  }

  /**
   * @description Llama al servicio de guardado
   * @param form
   */
  saveForm(form: any): void {
    console.log(form);
    this.mock.saveForm(form).subscribe((res) => {
      console.log(res);
    });
  }

}
