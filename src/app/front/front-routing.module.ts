import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {MainComponent} from './main/main.component';
import {IndexComponent} from './index/index.component';

const routes: Routes = [
  {
    path: '', component: MainComponent,
    children: [
      {path: '', redirectTo: 'index.php', pathMatch: 'full'},
      {path: 'index.php', component: IndexComponent},
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FrontRoutingModule {
}
