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

	private loading: boolean = false;
	private error: string;

	constructor(private itemsService: ItemsService){}

	remove(){
		this.loading = true;
		this.itemsService.removeItem(this.item).subscribe(
			r => this.loading = false
		);
	}

	toggleChecked(){
		this.item.checked = !this.item.checked;
		this.loading = true;
		this.itemsService.updateItem(this.item).subscribe(
			r => this.loading = false
		);
	}
}
