import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {AdminRoutingModule} from './admin-routing.module';
import { MainComponent } from './main/main.component';

@NgModule({
  imports: [CommonModule, AdminRoutingModule],
  declarations: [MainComponent],
})
export class AdminModule {
}
