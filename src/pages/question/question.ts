import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {HttpService} from "../../app/http.service";
import {FormArray, FormBuilder, FormControl} from "@angular/forms";

/**
 * Generated class for the QuestionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  surveyForm;
  public id : number;
  public index : number;
  public quiz = [];
  public answers = [];

  constructor(public navCtrl: NavController, public navParams: NavParams,public httpService: HttpService,private formBuilder:FormBuilder) {
    this.surveyForm = this.formBuilder.group({
      questions: formBuilder.array([]),
      answer_ids: formBuilder.array([]),
    });
    this.id = navParams.get('id');
    this.index = navParams.get('index');
    this.getQuiz();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad QuestionPage');
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

  onChange(question,id, isChecked) {
    let answer  = {
      'question': question,
      'id' : id,
      'correct' : isChecked
    };
    let bool = false;
    if(isChecked === true){
      bool = false;
      for(let a of this.answers){
        if(this.compare(a,answer)){
          bool = true;
        }
      }
      if(bool === false){
        this.answers.push(answer);
      }
    }else{
      bool = false;
      let i = 0;
      for(let a of this.answers){
        if(a['question']===answer['question'] && a['id']===answer['id']){
          this.answers.splice(i);
          break;
        }
        i++;
      }
    }
  }
  toResult(){
    this.httpService.validateAnswers(this.answers).subscribe(
      data => {
        console.log(data);
      },
      error => {
        console.log(error.json());
      }
    )
  }

  private compare(obj1,obj2){
    return JSON.stringify(obj1) === JSON.stringify(obj2);
  }

}
