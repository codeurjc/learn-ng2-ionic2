import {Item} from './item.model';
import {Injectable} from 'angular2/core';
import {Http, Headers, RequestOptions} from 'angular2/http';
import {Observable} from 'rxjs/Observable';
import {Observer} from 'rxjs/Observer';
import 'rxjs/Rx';

const BASE_URL = 'http://127.0.0.1:8080/items';

export class ObservableHelper<T> {

  observer: Observer<T>;
  observable = Observable.create(o => this.observer = o);

  result(t:T){
    if(this.observer){
      this.observer.next(t);
      this.observer.complete();
    }
  }
  error(error:any){
    if(this.observer){
      this.observer.error(error);
    }
  }
}

@Injectable()
export class ItemsService {

    private items: Item[] = []

    constructor(private http: Http) { }

    getItems() {
        return this.items;
    }

    loadItems() {

        let obsHelper = new ObservableHelper<Item[]>();

        this.http.get(BASE_URL).subscribe(
            response => {
                this.items.length = 0;
                this.items.push.apply(this.items, response.json());

                obsHelper.result(this.items);
            },
            error => {
                console.error(error);
                obsHelper.error(error);
            }
        );

        return obsHelper.observable;
    }

    addItem(item: Item) {

        let obsHelper = new ObservableHelper<Item>();

        let body = JSON.stringify(item);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers });

        this.http.post(BASE_URL, body, options).subscribe(
            response => {
                this.items.push(response.json());
                obsHelper.result(response.json());
            },
            error => {
                console.error(error);
                obsHelper.error(error);
            }
        );

        return obsHelper.observable;
    }

    removeItem(item: Item) {

        let obsHelper = new ObservableHelper<void>();

        this.http.delete(BASE_URL + '/' + item.id).subscribe(
            response => {
                let index = this.items.indexOf(item);
                if (index > -1) {
                    this.items.splice(index, 1);
                }
                obsHelper.result(undefined);
            },
            error => {
                console.error(error);
                obsHelper.error(error);
            }
        );

        return obsHelper.observable;
    }

    updateItem(item: Item) {

        let obsHelper = new ObservableHelper<Item>();

        let body = JSON.stringify(item);
        let headers = new Headers({
            'Content-Type': 'application/json'
        });
        let options = new RequestOptions({ headers });

        this.http.put(BASE_URL + '/' + item.id, body, options).subscribe(
            response => {
                console.log(response);
                obsHelper.result(response.json());
            },
            error => {
                console.error(error);
                obsHelper.error(error);
            }
        );

        return obsHelper.observable;
    }
}
