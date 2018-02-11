/**
 * Created by Rabab Chahboune on 1/5/2018.
 */
import { Injectable } from "@angular/core";
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable()
export class HttpService {
  host = 'http://localhost:8000/';
  api = 'api/';
  public Admin;
  private headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  constructor(private http: HttpClient) {
  }

  getHost(endPoint: string) {
    return this.host + this.api + endPoint;
  }

  getCourses(userName: string){
    return this.http.get(this.getHost("Utilisateurs/gulgowski.margarette?include=Disponible"));
  }
  getCours(code: string){
    return this.http.get(this.getHost("Cours/"+code+"?include=Quizzes"));
  }
  getCards(code: string){
    return this.http.get(this.getHost("Cours/"+code+"?include=Cartes"));
  }
  getQuiz(id : number){
    return this.http.get(this.getHost("Quizzes/"+id+"?include=Questions"));
  }
  validateAnswers(quiz_id,user_id,answers){
    return this.http.post(this.getHost("Validate"),{"quiz_id":quiz_id,"utilisateur_id":user_id,"answers":answers});
  }
  alreadyPassed(quiz_id,user_id){
    let body = {
      utilisateur_id : user_id,
      quiz_id : quiz_id
    };
    return this.http.post(this.getHost("Register"),body);
  }
  getRanking(id){
    return this.http.get(this.getHost("Ranking/"+id));
  }
}
