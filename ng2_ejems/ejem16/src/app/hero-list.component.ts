import {Component}   from 'angular2/core';
import {ROUTER_DIRECTIVES} from 'angular2/router';
import {Hero, HeroService}   from './hero.service';

@Component({
  directives: [ROUTER_DIRECTIVES],
  template: `
    <h2>HEROES</h2>
    <ul class="items">
      <li *ngFor="#hero of heroes">
        <a [routerLink]="['HeroDetail', { id: hero.id }]">{{hero.id}} - {{hero.name}}</a>
      </li>
    </ul>
  `
})
export class HeroListComponent {

  heroes: Hero[];

  constructor(service: HeroService) {
      this.heroes = service.getHeroes();
  }
}
