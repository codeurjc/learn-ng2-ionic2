import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Item} from './item.model';
import {ItemsService} from './items.service';

@Component({
	selector: 'item',
	templateUrl: 'app/item.component.html'
})
export class ItemComponent {

  @Input()
	private item: Item;

	@Output()
	private remove = new EventEmitter<Item>();

	@Output()
	private checked = new EventEmitter<Item>();

	fireRemove(){
		this.remove.next(this.item);
	}

	toggleChecked(){
		this.item.checked = !this.item.checked;
		this.checked.next(this.item);
	}
}
