import {Component} from 'angular2/core';
import {ElemsService} from './elems.service';
import {ElemComponent} from './elem.component';

@Component({
	selector: 'app',
	templateUrl: 'app/app.component.html',
	providers: [ElemsService],
	directives: [ElemComponent]
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
