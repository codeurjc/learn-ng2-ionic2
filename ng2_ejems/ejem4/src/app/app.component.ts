import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html'
})
export class AppComponent {
	name = "Anybody";

	setName(name:string){
		this.name = name;
	}
}
