import {Component, ViewChild} from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpService} from "../../app/http.service";
import {QuestionPage} from "../question/question";
import { Chart } from 'chart.js';
import { OnInit } from '@angular/core';
import {RankingPage} from "../ranking/ranking";
import {CardPage} from "../card/card";
import {CoursPage} from "../cours/cours";


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
export class QuizPage implements OnInit{

  public id : number;
  public index : number;
  public quiz = [];
  public passed;
  public exists;
  public correct=0;
  public false=0;
  // Doughnut
  public doughnutChartLabels:string[] = ['Correct', 'False'];
  public doughnutChartData:number[] = [this.correct,this.false];
  public doughnutChartType:string = 'doughnut';
  private doughnutChartColours: any[] = [{
    backgroundColor: ["#fff",'#f44336'],
    borderColor: '#fff'
  }]


  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService) {
    this.id = navParams.get('id');
    this.index = navParams.get('index');
    this.getQuiz();
    this.alreadyPassed();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuizPage');

  }
  ngOnInit(){
    this.doughnutChartLabels= ['Correct', 'False'];
    this.doughnutChartData = [this.correct,this.false];
    this.doughnutChartType = 'doughnut';


  }


  getQuiz(){
    this.httpService.getQuiz(this.id).subscribe(
      data => {
        this.quiz = data[0];
        console.log(this.quiz);
      },
      error => {
        console.log(error);
      }
    )
  }

  toQuestions() {
    this.navCtrl.setRoot(QuestionPage,{
      "id" : this.id,
      "index" : this.index,
    });
  }
  toRanking(){
    this.navCtrl.setRoot(RankingPage,{
      "id" : this.id,
      "index" : this.index,
    });
  }

  alreadyPassed(){
    this.httpService.alreadyPassed(this.id,'gulgowski.margarette').subscribe(
      data => {
        this.passed = data[0];
          this.exists = 1;
          this.correct = 1;
          this.false = 1;
          //this.correct = ( (<number>this.passed['score']) * ((this.quiz['related_question']).length))/100;
          //this.false = ((this.quiz['related_question']).length) - this.correct;
          console.log(this.passed);
      },
      error => {
        this.exists = 0;
        console.log(error);
      }
    )
  }


  // events
  public chartClicked(e:any):void {
    console.log(e);
    this.doughnutChartData[0] = this.correct;
    this.doughnutChartData[1] = this.false;
    console.log(this.correct);

  }

  public chartHovered(e:any):void {
    console.log(e);
  }
  previous(){
    this.navCtrl.setRoot(CoursPage,{
      "id" : this.quiz['cours_id']
    });
  }
}


