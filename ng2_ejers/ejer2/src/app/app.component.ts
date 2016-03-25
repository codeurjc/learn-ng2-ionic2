import {Component} from 'angular2/core';
import {Item} from './item.model';
import {ItemComponent} from './item.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [ItemComponent]
})
export class AppComponent {

	private items: Item[] = [];

	addItem(description: string){
		this.items.push({description, checked:false});
	}

	removeItem(item: Item){
		let index = this.items.indexOf(item);
		if(index > -1){
			this.items.splice(index,1);
		}
	}
}
