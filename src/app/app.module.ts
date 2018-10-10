import { TriviasPage } from './../pages/trivias/trivias';
import { BadgeCollectionPage } from './../pages/badge-collection/badge-collection';
import { AnimalCollectionPage } from './../pages/animal-collection/animal-collection';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GoogleMaps } from '@ionic-native/google-maps';
import { ZooMapPage } from '../pages/zoo-map/zoo-map';
import { VisitorInfoPage } from '../pages/visitor-info/visitor-info';
import { SettingsPage } from '../pages/settings/settings';
import { PhotoboothPage } from '../pages/photobooth/photobooth';
import { SplashscreenPage } from '../pages/splashscreen/splashscreen';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    ZooMapPage,
    AnimalCollectionPage,
    VisitorInfoPage,
    SettingsPage,
    BadgeCollectionPage,
    PhotoboothPage,
    TriviasPage,
    SplashscreenPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ZooMapPage,
    AnimalCollectionPage,
    SettingsPage,
    BadgeCollectionPage,
    PhotoboothPage,
    TriviasPage,
    SplashscreenPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
