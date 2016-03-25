import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';
import {GoogleBooksService} from './googlebooks.service';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    providers: [HTTP_PROVIDERS, GoogleBooksService]
})
export class AppComponent {

    private books: string[] = [];

    constructor(private http: Http, private service: GoogleBooksService) {}

    search(title: string) {

        this.books = [];

        this.service.getBooks(title).subscribe(
          books => this.books = books,
          error => console.error(error)
        );
    }
}
