import { NgModule } from '@angular/core';
import {NbButtonModule, NbCardModule, NbMenuModule, NbTabsetModule} from '@nebular/theme';

import { ThemeModule } from '../@theme/theme.module';
import { AdminComponent } from './admin.component';
import { AdminRoutingModule } from './admin-routing.module';
import { NotFoundComponent } from './not-found/not-found.component';

@NgModule({
  imports: [
    AdminRoutingModule,
    NbCardModule,
    NbButtonModule,
    ThemeModule,
    NbMenuModule,
  ],
  declarations: [
    AdminComponent,
    NotFoundComponent,
  ],
})
export class AdminModule {
}
