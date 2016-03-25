import {Item} from './item.model';
import {Injectable} from 'angular2/core';

@Injectable()
export class ItemsService {

  private items: Item[] = []

  constructor(){}

  getItems(){
    return this.items
  }

  addItem(item: Item){
    this.items.push(item);
  }

  removeItem(item: Item){
    let index = this.items.indexOf(item);
		if(index > -1){
			this.items.splice(index,1);
		}
  }
}
