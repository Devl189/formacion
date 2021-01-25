import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatCardModule} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';

@NgModule({
  declarations: [HomeComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    MatGridListModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class HomeModule { }
