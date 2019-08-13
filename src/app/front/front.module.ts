import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {FrontRoutingModule} from './front-routing.module';
import { MainComponent } from './main/main.component';
import {NbCardModule, NbIconModule, NbLayoutModule} from '@nebular/theme';
import { FooterComponent } from './footer/footer.component';
import { HeaderComponent } from './header/header.component';
import { IndexComponent } from './index/index.component';
import {NgxUsefulSwiperModule} from 'ngx-useful-swiper';

@NgModule({
  imports: [
    CommonModule,
    NbLayoutModule,
    NgxUsefulSwiperModule,
    NbCardModule,
    NbIconModule,
    FrontRoutingModule],
  declarations: [MainComponent, FooterComponent, HeaderComponent, IndexComponent],
})
export class FrontModule {
}
