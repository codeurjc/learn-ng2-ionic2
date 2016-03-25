import {Component, Input, Output, EventEmitter} from 'angular2/core';
import {Item} from './item.model';

@Component({
	selector: 'item',
	templateUrl: 'app/item.component.html'
})
export class ItemComponent {

  @Input()
	private item: Item;

	@Output()
	private remove = new EventEmitter<any>();

	fireRemove(){
		this.remove.next(undefined);
	}
}
