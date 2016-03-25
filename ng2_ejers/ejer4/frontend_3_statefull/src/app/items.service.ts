import {Item} from './item.model';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import 'rxjs/Rx';

const BASE_URL = 'http://127.0.0.1:8080/items';

@Injectable()
export class ItemsService {

  private items: Item[] = []

  constructor(private http: Http){}

  getItems(){
    this.http.get(BASE_URL).subscribe(
      response => {
        this.items.length = 0;
        this.items.push.apply(this.items, response.json());
      },
      error => console.error(error)
    );

    return this.items
  }

  addItem(item: Item){

    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});

    this.http.post(BASE_URL, body, options).subscribe(
      response => this.items.push(response.json()),
      error => console.error(error)
    );
  }

  removeItem(item: Item){
    this.http.delete(BASE_URL+'/'+item.id).subscribe(
      response => {
        let index = this.items.indexOf(item);
    		if(index > -1){
    			this.items.splice(index,1);
    		}
      },
      error => console.error(error)
    );
  }

  updateItem(item: Item){

    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({headers});

    this.http.put(BASE_URL+'/'+item.id, body, options).subscribe(
      response => console.log(response),
      error => console.error(error)
    );
  }
}
