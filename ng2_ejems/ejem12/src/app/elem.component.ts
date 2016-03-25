import {Component, Input} from 'angular2/core';
import {ElemsService} from './elems.service';

@Component({
	selector: 'elem',
	templateUrl: 'app/elem.component.html'
})
export class ElemComponent {

  @Input()
  elem: string;

  constructor(private elemsService : ElemsService){
	}

  remove(){
    this.elemsService.remove(this.elem);
  }
}
