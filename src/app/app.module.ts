/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {BrowserModule} from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {NgModule} from '@angular/core';
import {HttpClientModule} from '@angular/common/http';
import {CoreModule} from './@core/core.module';
import {ThemeModule} from './@theme/theme.module';
import {AppComponent} from './app.component';
import {AppRoutingModule} from './app-routing.module';
import {
  NbButtonModule,
  NbCardModule,
  NbChatModule, NbCheckboxModule,
  NbDatepickerModule,
  NbDialogModule, NbIconModule, NbInputModule, NbLayoutModule,
  NbMenuModule,
  NbSidebarModule, NbTableModule, NbTabsetModule,
  NbToastrModule,
  NbWindowModule,
} from '@nebular/theme';
import {AuthComponent} from './@component/auth/auth.component';
import {LoginComponent} from './@component/auth/login/login.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [AppComponent, AuthComponent, LoginComponent],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    AppRoutingModule,
    ThemeModule.forRoot(),
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbDatepickerModule.forRoot(),
    NbDialogModule.forRoot(),
    NbWindowModule.forRoot(),
    NbToastrModule.forRoot(),
    NbChatModule.forRoot({
      messageGoogleMapKey: 'AIzaSyA_wNuCzia92MAmdLRzmqitRGvCF7wCZPY',
    }),
    CoreModule.forRoot(),
    NbTabsetModule,
    NbIconModule,
    NbCardModule,
    NbLayoutModule,
    FormsModule,
    NbButtonModule,
    NbInputModule,
    NbCheckboxModule,
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
