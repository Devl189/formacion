import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {TranslateLoader, TranslateModule} from '@ngx-translate/core';
import {HttpClient, HttpClientModule} from '@angular/common/http';
import {TranslateHttpLoader} from '@ngx-translate/http-loader';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {CanActivateRouteGuard} from './shared/guards/canActivateRoute.guard';

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

@NgModule({
  // Recuros utilizados en el ambito de este modulo
  declarations: [
    AppComponent
  ],
  // Importación de modulos necesarios
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    // Modulo de traducciones
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient],
      },
      isolate: false,
    }),
    // Animaciones angular Material
    BrowserAnimationsModule
  ],
  // Evita tener que importar el modulo de traducciones en otros modulos (Recursos que el modulo exporta para ser utilizados por otros modulos)
  exports: [TranslateModule],
  // Guard (Recursos que pueden ser inyectados en un componente)
  providers: [CanActivateRouteGuard],
  // Indica el componente raiz de la aplicacion
  bootstrap: [AppComponent]
})
export class AppModule {
}
