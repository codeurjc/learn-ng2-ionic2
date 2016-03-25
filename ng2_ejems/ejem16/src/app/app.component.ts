import {Component} from 'angular2/core';
import {RouteConfig, ROUTER_DIRECTIVES} from 'angular2/router';
import {HeroListComponent} from './hero-list.component';
import {HeroDetailComponent} from './hero-detail.component';
import {HeroService} from './hero.service';

@Component({
  selector: 'app',
  template: `
    <h1 class="title">Component Router</h1>
    <router-outlet></router-outlet>
  `,
  providers:  [HeroService],
  directives: [ROUTER_DIRECTIVES]
})
@RouteConfig([
  {path: '/heroes', name: 'Heroes', component: HeroListComponent, useAsDefault: true},
  {path: '/hero/:id', name: 'HeroDetail', component: HeroDetailComponent},
])
export class AppComponent { }
