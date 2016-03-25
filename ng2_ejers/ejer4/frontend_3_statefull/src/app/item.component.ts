import {Component, Input} from 'angular2/core';
import {Item} from './item.model';
import {ItemsService} from './items.service';

@Component({
	selector: 'item',
	templateUrl: 'app/item.component.html'
})
export class ItemComponent {

  @Input()
	private item: Item;

	constructor(private itemsService: ItemsService){}

	remove(){
		this.itemsService.removeItem(this.item);
	}

	toggleChecked(){
		this.item.checked = !this.item.checked;
		this.itemsService.updateItem(this.item);
	}
}
