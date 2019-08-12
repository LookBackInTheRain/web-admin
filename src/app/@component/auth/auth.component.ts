import {Component, OnDestroy, OnInit} from '@angular/core';
import {NbAuthService} from '@nebular/auth';
import {takeWhile} from 'rxjs/operators';
import { Location } from '@angular/common';
@Component({
  selector: 'ngx-auth',
  template: `
      <nb-layout>
          <nb-layout-column>
              <nb-card>
                  <nb-card-header>
                      <div class="row">
                          <div class="col-md-1">
                              <nav class="navigation">
                                  <a href="#" (click)="back()" class="link back-link" aria-label="Back">
                                      <nb-icon icon="arrow-back"></nb-icon>
                                  </a>
                              </nav>
                          </div>
                          <div class="col-md-11">
                              <span class="title-txt">登 录</span>
                          </div>
                      </div>
                  </nb-card-header>
                  <nb-card-body>
                      <div class="body-container">
                          <router-outlet></router-outlet>
                      </div>
                  </nb-card-body>
              </nb-card>
          </nb-layout-column>
      </nb-layout>
  `,
  styleUrls: ['./auth.component.scss'],
})
export class AuthComponent implements  OnDestroy {

  private alive = true;

  subscription: any;

  authenticated: boolean = false;
  token: string = '';

  // showcase of how to use the onAuthenticationChange method
  constructor(protected auth: NbAuthService, protected location: Location) {

    this.subscription = auth.onAuthenticationChange()
      .pipe(takeWhile(() => this.alive))
      .subscribe((authenticated: boolean) => {
        this.authenticated = authenticated;
      });
  }

  back() {
    this.location.back();
    return false;
  }

  ngOnDestroy(): void {
    this.alive = false;
  }

}
