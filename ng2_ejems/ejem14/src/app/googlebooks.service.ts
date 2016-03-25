import {Injectable} from 'angular2/core';
import {Http, Response} from 'angular2/http';
import 'rxjs/Rx';

@Injectable()
export class GoogleBooksService {

    constructor(private http: Http) { }

    getBooks(title: string) {

      let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;

      return this.http.get(url).map(
        response => this.extractTitles(response));
    }

    private extractTitles(response: Response) {
      return response.json().items.map( book => book.volumeInfo.title)
    }
}
