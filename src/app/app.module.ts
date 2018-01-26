import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { ListPage } from '../pages/list/list';
import {CoursPage} from "../pages/cours/cours";

import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import {CardPage} from "../pages/card/card";
import {HttpService} from "./http.service";
import {QuizPage} from "../pages/quiz/quiz";
import {QuestionPage} from "../pages/question/question";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    CardPage,
    QuizPage,
    QuestionPage,

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp),
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    CardPage,
    QuizPage,
    QuestionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
