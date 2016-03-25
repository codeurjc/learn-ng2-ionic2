import {Injectable} from 'angular2/core';

@Injectable()
export class ElemsService {

  public elems: string[] = []

  add(elem: string){
    this.elems.push(elem);
  }
}
