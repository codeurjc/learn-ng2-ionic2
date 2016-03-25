import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html'
})
export class AppComponent {

	name = "Anybody";
	gender:string;
	javascript = false;
  angular = false;
	items = [
		{value:'Item1', selected:false},
		{value:'Item2',selected:false}
	]

	change(){
		this.name = "Nobody";
		this.angular = !this.angular;
		this.javascript = !this.javascript;
		this.gender = this.gender == 'Male'? 'Female':'Male';

		for(let key in this.items){
			this.items[key].selected = !this.items[key].selected;
		}
	}
}
