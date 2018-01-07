import {Component} from '@angular/core';
import {NavController} from 'ionic-angular';
import {CoursPage} from "../cours/cours";
import {HttpService} from "../../app/http.service";

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Courses = [];
  public Colors: string[] = ['#f44336','#4cb2d4','#844d9e','#eb7b2d'];

  public title:  string = 'Example';
  constructor(public navCtrl: NavController, public httpService: HttpService) {
    this.getCourses();
  }

  getCourses(){
    this.httpService.getCourses("test").subscribe(
      data => {
        this.Courses = data[0]['see_cours'];
        for (let cours of this.Courses) {
          cours.color = this.Colors[Math.floor(Math.random() * 4)];
          console.log(cours);
        }
      },
      error => {
        console.log(error.json());
      }
    )
  }
  tapEvent(e,id) {
    console.log(id);
    this.navCtrl.setRoot(CoursPage,{
      "id" : id
    });
  }
}
