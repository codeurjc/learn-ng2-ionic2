import {Page, NavController} from 'ionic-angular';
import {DetailsPage} from '../details/details';

@Page({
    templateUrl: 'build/pages/home/home.html'
})
export class HomePage {

    public elems = [
      {name:"Elem1", desc: "Elem1 description"},
      {name:"Elem2", desc: "Elem2 description"},
      {name:"Elem3", desc: "Elem3 description"}
    ];

    constructor(private nav: NavController) {}

    goToDetails(elem){
      this.nav.push(DetailsPage, {elem: elem})
    }
}
