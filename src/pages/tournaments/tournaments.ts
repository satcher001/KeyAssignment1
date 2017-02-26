import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import {TeamsPage} from '../pages';
import { EliteApiService } from '../../providers/shared';

/*
  Generated class for the Tournaments page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-tournaments',
  templateUrl: 'tournaments.html'
})
export class TournamentsPage {


  tournaments: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, private eliteApi: EliteApiService, private loadingController: LoadingController) {}

  itemTapped($event, tourney){
    this.navCtrl.push(TeamsPage, tourney);
  }

  ionViewDidLoad() {
        this.eliteApi.getTournaments()
            .then(data => this.tournaments = data);
    console.log('ionViewDidLoad TournamentsPage');
    }
}
