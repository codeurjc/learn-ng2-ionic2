import {Component} from 'angular2/core';
import {HTTP_PROVIDERS, Http} from 'angular2/http';

@Component({
    selector: 'app',
    templateUrl: 'app/app.component.html',
    providers: [HTTP_PROVIDERS]
})
export class AppComponent {

    private books: string[] = [];

    constructor(private http: Http) {}

    search(title: string) {

        this.books = [];

        let url = "https://www.googleapis.com/books/v1/volumes?q=intitle:" + title;

        this.http.get(url).subscribe(
            response => {
                let data = response.json();
                for (var i = 0; i < data.items.length; i++) {
                    let bookTitle = data.items[i].volumeInfo.title;
                    this.books.push(bookTitle);
                }
            },
            error => console.error(error)
					);
    }
}
