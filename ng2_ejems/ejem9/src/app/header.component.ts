import {Component, Output, EventEmitter } from 'angular2/core';

@Component({
	selector: 'header',
	templateUrl: 'app/header.component.html'
})
export class HeaderComponent {

	@Output()
	hidden = new EventEmitter<boolean>();

	visible = true;

	click(){
		this.visible = !this.visible;
		this.hidden.next(this.visible);
	}

}
