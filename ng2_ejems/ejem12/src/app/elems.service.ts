import {Injectable} from 'angular2/core';

@Injectable()
export class ElemsService {

  public elems: string[] = []

  add(elem: string){
    this.elems.push(elem);
  }

  remove(elem: string){
    let indexOf = this.elems.indexOf(elem);
    if(indexOf != -1){
      this.elems.splice(indexOf, 1);
    }
  }
}
