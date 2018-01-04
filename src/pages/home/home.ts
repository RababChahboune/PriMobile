import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {ListPage} from "../list/list";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {


  public title:  string = 'Example';
  constructor(public navCtrl: NavController) {

  }

  tapEvent(e) {
    console.log(this.title);
    this.navCtrl.setRoot(ListPage);
  }
}
