import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
//import 'rxjs/add/operator/map';
import { Response } from '@angular/http';
import 'rxjs';
import { Observable } from 'rxjs/Observable';

/*
  Generated class for the EliteApiService provider.

  See https://angular.io/docs/ts/latest/guide/dependency-injection.html
  for more info on providers and Angular 2 DI.
*/
@Injectable()
export class EliteApiService {

  private baseUrl = 'https://elite-schedule-http-98e53.firebaseio.com/'


  currentTourney: any = { };

    constructor(public http: Http) {
    //console.log('Hello EliteApiService Provider');
  }

  getTournamentData(tourneyID) : Observable<any>{
        return this.http.get(`${this.baseUrl}/tournaments-data/${tourneyID}.json`)
            .map((response: Response) => {
                this.currentTourney = response.json();
                return this.currentTourney;
        });
    }

  getTournaments(){
        return new Promise(resolve => {
            this.http.get(`${this.baseUrl}/tournaments.json`)
                .subscribe(res => resolve(res.json()));
        });
    }

}
