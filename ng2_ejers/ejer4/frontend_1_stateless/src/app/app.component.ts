import {Component, OnInit} from 'angular2/core';
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
export class AppComponent implements OnInit {

	private items: Item[] = [];

	constructor(private itemsService: ItemsService){}

	ngOnInit(){
		this.refresh();
	}

	private refresh(){
		this.itemsService.getItems().subscribe(
			items => this.items = items
		);
	}

	addItem(description: string){
		let item = {description, checked:false};
		this.itemsService.addItem(item).subscribe(
			result => this.refresh()
		);
	}

	removeItem(item: Item){
		this.itemsService.removeItem(item).subscribe(
			result => this.refresh()
		);
	}

	updateItem(item: Item){
		this.itemsService.updateItem(item).subscribe(
			result => this.refresh()
		);
	}
}
