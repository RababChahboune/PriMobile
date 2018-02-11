import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {FormControl, FormGroup} from "@angular/forms";
import {HomePage} from "../home/home";

/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  authForm: FormGroup;
  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.authForm = new FormGroup({
      username: new FormControl(),
      password: new FormControl(),
    });
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

  onSubmit(value: any): void {
    if(this.authForm.valid) {
      console.log('username', value.username);
      console.log('password', value.password);
      this.navCtrl.setRoot(HomePage);
    }
  }

}
