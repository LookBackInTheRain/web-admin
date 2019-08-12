import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';

const routes: Routes = [
  {path: '', redirectTo: 'index', pathMatch: 'full'},
  {path: 'index', component: MainComponent, data: {title: '首页'}},
];

@NgModule({
  imports: [RouterModule.forChild([])],
  exports: [RouterModule],
})
export class AdminRoutingModule {
}
