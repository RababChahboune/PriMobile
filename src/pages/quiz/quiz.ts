import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpService} from "../../app/http.service";
import {QuestionPage} from "../question/question";

/**
 * Generated class for the QuizPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-quiz',
  templateUrl: 'quiz.html',
})
export class QuizPage {

  public id : number;
  public index : number;
  public quiz = [];


  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService) {
    this.id = navParams.get('id');
    this.index = navParams.get('index');
    this.getQuiz();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');
  }

  getQuiz(){
    this.httpService.getQuiz(this.id).subscribe(
      data => {
        this.quiz = data[0];
        console.log(this.quiz);
      },
      error => {
        console.log(error.json());
      }
    )
  }

  toQuestions() {
    this.navCtrl.setRoot(QuestionPage,{
      "id" : this.id,
      "index" : this.index,
    });
  }
}


