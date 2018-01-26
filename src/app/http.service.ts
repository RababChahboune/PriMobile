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
  validateAnswers(answers){
    return this.http.post(this.getHost("Validate"),{"answers":answers});
  }
}
