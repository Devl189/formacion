import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {HomeComponent} from './home.component';
import {CanActivateRouteGuard} from '../../shared/guards/canActivateRoute.guard';

const routes: Routes = [
  {path: '', component: HomeComponent, canActivate: [CanActivateRouteGuard]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
