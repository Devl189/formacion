import {NgModule} from '@angular/core';
import {PreloadAllModules, RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {
    path: 'home',
    loadChildren: './modules/home/home.module#HomeModule'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, {
      // Precarga los modulos para agilizar su visualización cuando sea necesario
      preloadingStrategy: PreloadAllModules,
      // Evita ir a rutas inexistentes, carga el primer componente de las rutas
      useHash: true,
    })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
