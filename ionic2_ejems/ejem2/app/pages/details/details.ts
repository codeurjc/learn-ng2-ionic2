import {Page, NavParams} from 'ionic-angular';

@Page({
    templateUrl: 'build/pages/details/details.html'
})
export class DetailsPage {

    elem: any;

    constructor(navParams: NavParams) {
        this.elem = navParams.get('elem');
    }
}
