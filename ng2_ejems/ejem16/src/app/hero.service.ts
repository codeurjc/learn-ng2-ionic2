import {Injectable} from 'angular2/core';

export class Hero {
  constructor(public id: number, public name: string) { }
}

@Injectable()
export class HeroService {

  private heroes = [
  	new Hero(11, 'Mr. Nice'),
  	new Hero(12, 'Narco'),
  	new Hero(13, 'Bombasto'),
  	new Hero(14, 'Celeritas'),
  	new Hero(15, 'Magneta'),
  	new Hero(16, 'RubberMan')
  ];

  getHeroes() {
    return this.heroes;
  }

  getHero(id: number | string) {
    return this.heroes.filter(h => h.id === +id)[0];
  }
}
