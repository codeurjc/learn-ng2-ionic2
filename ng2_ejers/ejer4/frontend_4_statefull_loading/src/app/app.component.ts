import {Component, OnInit} from 'angular2/core';
import {HTTP_PROVIDERS} from 'angular2/http';
import {Item} from './item.model';
import {ItemComponent} from './item.component';
import {ItemsService} from './items.service';
import {Observable} from 'rxjs/Observable';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	directives: [ItemComponent],
	providers: [ItemsService, HTTP_PROVIDERS]
})
export class AppComponent implements OnInit {

	private items: Item[];
	private loading: boolean = false;
	private error: string;

	constructor(private itemsService: ItemsService){
		this.items = itemsService.getItems();
	}

	ngOnInit() {
		this.refresh();
	}

	refresh(){
		this.remoteRequest(this.itemsService.loadItems());
	}

	addItem(description: string){
		let item = {description, checked:false};
		this.remoteRequest(this.itemsService.addItem(item));
	}

	private remoteRequest(observable: Observable<any>){
    this.loading = true;
		observable.subscribe(
			response => this.loading = false,
			error => {
				this.loading = false;
				this.error = "Server error";
				setTimeout(()=> this.error = undefined, 5000);
			}
		);
	}
}
