import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';
import { ChartsModule } from 'ng2-charts';


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
import {RankingPage} from "../pages/ranking/ranking";
import {LoginPage} from "../pages/login/login";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ListPage,
    CoursPage,
    CardPage,
    QuizPage,
    QuestionPage,
    RankingPage,
    LoginPage

  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    ChartsModule,
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
    RankingPage,
    LoginPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    HttpService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
