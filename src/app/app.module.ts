import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { MoviePage } from '../pages/movie/movie';
import { SeriePage } from '../pages/serie/serie';
import { PeoplePage } from '../pages/people/people';
import { DetailPage } from '../pages/detail/detail';
import { SearchService } from '../service/SearchService';


import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    MoviePage,
    SeriePage,
    PeoplePage,
    DetailPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    MoviePage,
    SeriePage,
    PeoplePage,
    DetailPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    SearchService,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
