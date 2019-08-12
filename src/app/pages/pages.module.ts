import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbMenuModule, NbTabsetModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { PagesComponent } from './pages.component';
import { PagesRoutingModule } from './pages-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    PagesRoutingModule,
    ThemeModule,
    NbMenuModule,
    NbTabsetModule,
    NbCardModule,
    NbButtonModule,
  ],
  declarations: [
    PagesComponent,
    NotFoundComponent,
  ],
})
export class PagesModule {
}
