import {Item} from './item.model';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import 'rxjs/Rx';

const BASE_URL = 'http://127.0.0.1:8080/items';

@Injectable()
export class ItemsService {

  constructor(private http: Http) { }

  getItems() {
    return this.http.get(BASE_URL)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  addItem(item: Item) {

    let body = JSON.stringify(item);
    let headers = new Headers({
        'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });

    return this.http.post(BASE_URL, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
  }

  removeItem(item: Item) {
    return this.http.delete(BASE_URL + '/' + item.id)
      .map(response => undefined)
      .catch(error => this.handleError(error));
  }

  updateItem(item: Item) {

    let body = JSON.stringify(item);
    let headers = new Headers({
      'Content-Type': 'application/json'
    });
    let options = new RequestOptions({ headers });

    return this.http.put(BASE_URL + '/' + item.id, body, options)
      .map(response => response.json())
      .catch(error => this.handleError(error));
    }

    private handleError(error: any){
      console.error(error);
      return Observable.throw("Server error (" + error.status + "): " + error.text())
    }
}
