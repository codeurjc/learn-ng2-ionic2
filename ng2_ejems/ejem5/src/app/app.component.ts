import {Component} from 'angular2/core';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
  styles: [`
		.red { color: red; }
		.blue { color: blue; }
		.bold { font-weight: bold; }
	`],
	styleUrls: ['app/app.component.css']
})
export class AppComponent {

	name = "Anybody";

	className = "red";
	redActive = true;

	num = 2;
	visible = false;

	elems = [
		{ desc: 'Elem1', check: true },
		{ desc: 'Elem2', check: true },
		{ desc: 'Elem3', check: false }
	]

	pClasses = {
		red : true,
		bold: false
	}

	setClass(className:string){
		this.className = className;
		this.redActive = (className === 'red');
	}

	changeParagraph(){
		this.pClasses.bold = true;
	}

	showText(){
		this.visible = true;
		this.num = 3;
	}
}
