import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { MyTeamsPage, GamePage, TournamentsPage, TeamDetailPage, TeamsPage, StandingsPage, TeamHomePage} from '../pages/pages';
import { HttpModule } from '@angular/http';
import { EliteApiService } from '../providers/shared';



@NgModule({
  declarations: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,


  ],
  imports: [
    HttpModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    MyTeamsPage,
    GamePage,
    TeamsPage,
    TeamDetailPage,
    TournamentsPage,
    StandingsPage,
    TeamHomePage,
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}, EliteApiService]
})
export class AppModule {}
