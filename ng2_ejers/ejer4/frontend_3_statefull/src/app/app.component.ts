import {Component} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Item} from './item.model';
import {ItemComponent} from './item.component';
import {ItemsService} from './items.service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [ItemComponent],
	providers: [ItemsService, HTTP_PROVIDERS]
})
export class AppComponent {

	private items: Item[];

	constructor(private itemsService: ItemsService){
		this.items = itemsService.getItems();
	}

	addItem(description: string){
		this.itemsService.addItem({description, checked:false});
	}
}
