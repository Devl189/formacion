import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomeRoutingModule} from './home-routing.module';
import {HomeComponent} from './home.component';
import {TranslateModule} from '@ngx-translate/core';
import {MatGridListModule} from '@angular/material/grid-list';
import {
  MatCardModule,
  MatDatepickerModule,
  MatExpansionModule,
  MatIconModule,
  MatInputModule,
  MatNativeDateModule,
  MatPaginatorModule, MatSortModule,
  MatTableModule
} from '@angular/material';
import {MatButtonModule} from '@angular/material/button';
import {SectionOneComponent} from './components/section-one/section-one.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [HomeComponent, SectionOneComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    TranslateModule,
    // Angular Material
    // Grid
    MatGridListModule,
    // Cards
    MatCardModule,
    // Botones
    MatButtonModule,
    MatIconModule,
    // Inputs
    MatInputModule,
    MatNativeDateModule,
    // Date picker
    MatDatepickerModule,
    // Expansion panel
    MatExpansionModule,
    // Table
    MatTableModule,
    MatPaginatorModule,
    MatSortModule,
    // Formularios reactivos
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    MatDatepickerModule
  ]
})
export class HomeModule {
}
