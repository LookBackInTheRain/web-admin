import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontRoutingModule} from './front-routing.module';
import { IndexComponent } from './index/index.component';

@NgModule({
  imports: [CommonModule, FrontRoutingModule],
  declarations: [IndexComponent],
})
export class FrontModule {
}
