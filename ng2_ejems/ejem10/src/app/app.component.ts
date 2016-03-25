import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html'
})
export class AppComponent {

  elems: string[] = []

  add(elem: string){ this.elems.push(elem); }
}
