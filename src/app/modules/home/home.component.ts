import {Component, OnInit} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public title = 'APP.TITLE';
  public title2: string;
  public param = {value: 'Paco'};

  constructor(private translate: TranslateService) {
  }

  ngOnInit() {
    // Obtencion de las traducciones a traves del servicio
    this.title2 = this.translate.instant('APP.TITLE');
    this.translate.get('APP.HELLO', {value: 'Antonio'}).subscribe((res: string) => {
      console.log(res);
    });
  }

}
