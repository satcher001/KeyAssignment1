import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { TeamHomePage } from '../pages';
import { EliteApiService } from '../../providers/shared';
import { LoadingController } from 'ionic-angular';
/*
  Generated class for the Teams page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-teams',
  templateUrl: 'teams.html'
})
export class TeamsPage {

  teams = /**[
          { id: 1, name: 'HC Elite' },
          { id: 2, name: 'Team Takeover' },
          { id: 3, name: 'DC Thunder' }
        ];*/
         [];


tournaments:any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              private eliteApi: EliteApiService,
            private loadingController: LoadingController) {}

  itemTapped($event, team){

    this.navCtrl.push(TeamHomePage, team)
  }



  ionViewDidLoad(){
      let selectedTourney = this.navParams.data;

        let loader = this.loadingController.create({
            content: 'Getting Tournaments...'});

        loader.present().then(() => {
              this.eliteApi.getTournamentData(selectedTourney.id)
                .subscribe(data => {
                  this.teams = data.teams;
                })
                loader.dismiss();
            })

   }

}
