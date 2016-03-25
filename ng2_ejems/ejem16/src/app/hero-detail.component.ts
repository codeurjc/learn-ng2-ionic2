import {Component}  from 'angular2/core';
import {RouteParams, Router} from 'angular2/router';
import {Hero, HeroService}   from './hero.service';

@Component({
  template: `
  <h2>Hero {{hero.name}}</h2>
  <div>
    <label>Id: </label>{{hero.id}}</div>
  <div>
    <label>Name: </label>
    <input [(ngModel)]="hero.name" placeholder="name"/>
  </div>
  <p>
    <button (click)="gotoHeroes()">Back</button>
  </p>`
})
export class HeroDetailComponent {

  hero: Hero;

  constructor(private _router:Router, routeParams:RouteParams, service: HeroService){
      let id = routeParams.get('id');
      this.hero = service.getHero(id);
  }

  gotoHeroes() {
    this._router.navigate(['Heroes']);
  }
}
