import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CoursPage} from "../cours/cours";
import {HttpService} from "../../app/http.service";

/**
 * Generated class for the CardPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-card',
  templateUrl: 'card.html',
})
export class CardPage {
  public code : string;
  public cours = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService) {
    this.code = navParams.get('id');
    this.getCards();

  }

  getCards(){
    this.httpService.getCards(this.code).subscribe(
      data => {
        this.cours = data[0];
        console.log(this.cours);
      },
      error => {
        console.log(error.json());
      }
    )
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad CardPage');
  }
  previous(){
    this.navCtrl.setRoot(CoursPage,{
      "id" : this.cours['id']
    })
  }

}
