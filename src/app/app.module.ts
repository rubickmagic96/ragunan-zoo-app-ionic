import { IntroappPage } from './../pages/introapp/introapp';
import { TicketPage } from '../pages/ticket/ticket';
import { ContactusPage } from './../pages/contactus/contactus';
import { ActivitiesPage } from './../pages/activities/activities';
import { GetherePage } from './../pages/gethere/gethere';
import { TriviasPage } from './../pages/trivias/trivias';
import { BadgeCollectionPage } from './../pages/badge-collection/badge-collection';
import { AnimalCollectionPage } from './../pages/animal-collection/animal-collection';
import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SuperTabsModule } from 'ionic2-super-tabs';

import { Dialogs } from '@ionic-native/dialogs';
import { NativeAudio } from '@ionic-native/native-audio';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Camera } from '@ionic-native/camera' 

import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { GoogleMaps } from '@ionic-native/google-maps';
import { ZooMapPage } from '../pages/zoo-map/zoo-map';
import { VisitorInfoPage } from '../pages/visitor-info/visitor-info';
import { SettingsPage } from '../pages/settings/settings';
import { PhotoboothPage } from '../pages/photobooth/photobooth';
import { DetailAnimalPage } from '../pages/detail-animal/detail-animal';
import { HttpClient, HttpClientModule  } from '@angular/common/http';
import { InGamePage } from '../pages/in-game/in-game';
import { IonicStorageModule } from '@ionic/storage';
import { QuizProvider } from '../providers/quiz/quiz';
import { GethereServiceProvider } from '../providers/gethere-service/gethere-service';
import { AnimalcollectionServiceProvider } from '../providers/animalcollection-service/animalcollection-service';

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
    DetailAnimalPage,
    TicketPage,
    GetherePage,
    ActivitiesPage,
    ContactusPage,
    IntroappPage,
    InGamePage
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    SuperTabsModule.forRoot(),
    IonicModule.forRoot(MyApp),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: createTranslateLoader,
        deps: [HttpClient]
      }
    }),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    ZooMapPage,
    AnimalCollectionPage,
    VisitorInfoPage,
    SettingsPage,
    BadgeCollectionPage,
    PhotoboothPage,
    TriviasPage,
    DetailAnimalPage,
    TicketPage,
    GetherePage,
    ActivitiesPage,
    ContactusPage,
    IntroappPage,
    InGamePage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    GoogleMaps,
    NativeAudio,
    Dialogs,
    Camera,
    { provide: ErrorHandler, useClass: IonicErrorHandler },
    QuizProvider,
    GethereServiceProvider,
    AnimalcollectionServiceProvider
  ]
})
export class AppModule {}
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
