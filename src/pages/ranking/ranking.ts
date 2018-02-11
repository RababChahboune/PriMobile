import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpService} from "../../app/http.service";
import {QuizPage} from "../quiz/quiz";

/**
 * Generated class for the RankingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-ranking',
  templateUrl: 'ranking.html',
})
export class RankingPage {
  public id : number;
  public index : number;
  public rankings :any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService) {
    this.id = navParams.get('id');
    this.index = navParams.get('index');
    this.getRanking();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad RankingPage');
  }

  getRanking(){
    this.httpService.getRanking(this.id).subscribe(
      data => {
        this.rankings = data;
        console.log(this.rankings);
      },
      error => {
        console.log(error);
      }
    )
  }

  previous(){
    this.navCtrl.setRoot(QuizPage,{
      "id" : this.id,
      "index" : this.index,
    });
  }

}
