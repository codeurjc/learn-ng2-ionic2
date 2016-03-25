import {Component} from 'angular2/core';
import {ElemsService} from './elems.service';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	providers: [ElemsService]
})
export class AppComponent {

	private elems: string[];

  constructor(private elemsService : ElemsService){
		this.elems = elemsService.elems;
	}

  add(elem: string){
    this.elemsService.add(elem);
  }

}
