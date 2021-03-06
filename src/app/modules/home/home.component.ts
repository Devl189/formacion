import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {FormField, PeriodicElement} from '../../shared/models/interfaces';
import {Title} from '../../shared/models/title.model';
import {MockService} from '../../services/mock.service';
import {MatPaginator, MatSort, MatTableDataSource} from '@angular/material';
import {ELEMENT_DATA} from '../../constants/constants.constants';
import {Subject} from 'rxjs/internal/Subject';
import {takeUntil} from 'rxjs/operators';
import {MessageService} from '../../services/message.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit, AfterViewInit, OnDestroy {
  // Todos los observables tienen una variable de este tipo
  private unsubscribe: Subject<void> = new Subject();
  // Paginacion y ordenacion tablas
  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;
  // Variables traducciones
  public title = 'APP.TITLE';
  public title2: string;
  public param = {value: 'Paco'};
  // Variable grid
  public tiles: Title[] = [];
  // Formulario
  public formFields: FormField[] = [];
  // Variables Collapsable
  public panelOpenState = false;
  // Variables Tabla
  public displayedColumns: string[] = ['position', 'name', 'weight', 'symbol'];
  public dataSource = new MatTableDataSource<PeriodicElement>(ELEMENT_DATA);

  constructor(private translate: TranslateService, private mock: MockService, private messageService: MessageService) {
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
    // Inicializacion campos formulario
    this.formFields = [
      {type: 'input', id: 'nombre', mandatory: true, label: 'Nombre'},
      {type: 'date', id: 'fecha_nac', mandatory: false, label: 'Fecha Nacimiento'}
    ];
    // Llamada a servicio
    // pipe: permite usar operadores o funcionalidades en un observable, estos se pueden concatenar
    // takeUntil: permite cancelar la suscripción en función de un evento externo.
    this.mock.getData().pipe(takeUntil(this.unsubscribe)).subscribe(res => {
      console.log(res);
    });
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  /**
   * @description Llama al servicio de guardado
   * @param form
   */
  saveForm(form: any): void {
    console.log(form);
    this.mock.saveForm(form).pipe(takeUntil(this.unsubscribe)).subscribe((res) => {
      console.log(res);
    });
  }

  /**
   * @description Llama al servicio de envio de mensajes
   */
  sendMessage(): void {
    this.messageService.sendMessage('Message from Home Component to App Component!');
  }

  /**
   * @description Llama al servicio de mensajes para limpiarlos
   */
  clearMessages(): void {
    this.messageService.clearMessages();
  }

  ngOnDestroy() {
    this.unsubscribe.next();
    this.unsubscribe.complete();
  }

}
