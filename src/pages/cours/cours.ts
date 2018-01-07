import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {CardPage} from "../card/card";
import {HttpService} from "../../app/http.service";

/**
 * Generated class for the CoursPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-cours',
  templateUrl: 'cours.html',
})
export class CoursPage {
  public code : string;
  public cours = [];
  public difficulte;
  public fill;
  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService) {
    this.code = navParams.get('id');
    this.getCours();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CoursPage');
  }

  getCours(){
    this.httpService.getCours(this.code).subscribe(
      data => {
        this.cours = data[0];
        console.log(this.cours);
        this.difficulte = Array(this.cours['difficulte']);
        this.fill = Array(5-this.cours['difficulte']);
      },
      error => {
        console.log(error.json());
      }
    )
  }

  toCards(){
    this.navCtrl.setRoot(CardPage,{
      "id" : this.cours['id']
    });  }

}
