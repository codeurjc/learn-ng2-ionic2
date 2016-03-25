import {Component, Input} from 'angular2/core';

@Component({
	selector: 'header',
	templateUrl: 'app/header.component.html'
})
export class HeaderComponent {
	@Input()
	title: string;
}
