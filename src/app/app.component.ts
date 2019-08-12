/**
 * @license
 * Copyright Akveo. All Rights Reserved.
 * Licensed under the MIT License. See License.txt in the project root for license information.
 */
import {AfterViewChecked, AfterViewInit, Component, OnInit} from '@angular/core';
import {AnalyticsService} from './@core/utils';
import {Meta, Title} from '@angular/platform-browser';
import {ActivatedRoute, NavigationEnd, Router} from '@angular/router';
import 'rxjs-compat/add/operator/filter';
import {mapToMapExpression} from '@angular/compiler/src/render3/util';
import {catchError} from 'rxjs/operators';
import 'rxjs-compat/add/operator/map';
import 'rxjs-compat/add/operator/mergeMap';
import {Observable} from 'rxjs';
import 'rxjs-compat/add/observable/of';

@Component({
  selector: 'ngx-app',
  template: '<router-outlet></router-outlet>',
})
export class AppComponent implements OnInit {

  constructor(private analytics: AnalyticsService,
              private title: Title,
              private meta: Meta,
              private router: Router,
              private activateRoute: ActivatedRoute) {

    Observable
      .of('1')
      .map(() => '2')
      .subscribe(item => {
        console.log(item);
      });
  }

  ngOnInit(): void {
    this.analytics.trackPageViews();
    this.router.events
      .filter(et => et instanceof NavigationEnd)
      .map(() => this.activateRoute)
      .map(route => {
        while (route.firstChild) {
          route = route.firstChild;
        }
        return route;
      })
      .mergeMap(route => route.data)
      .subscribe(item => {
        this.title.setTitle(item['title']);
      });
  }
}

