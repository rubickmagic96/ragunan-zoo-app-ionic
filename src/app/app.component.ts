import { TriviasPage } from './../pages/trivias/trivias';
import { BadgeCollectionPage } from './../pages/badge-collection/badge-collection';
import { SettingsPage } from './../pages/settings/settings';
import { VisitorInfoPage } from './../pages/visitor-info/visitor-info';
import { AnimalCollectionPage } from './../pages/animal-collection/animal-collection';
import { Component, ViewChild } from '@angular/core';
import { Platform, Nav, ModalController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Storage } from '@ionic/storage'

import { HomePage } from '../pages/home/home';
import { ZooMapPage } from './../pages/zoo-map/zoo-map';
import { PhotoboothPage } from '../pages/photobooth/photobooth';

import { TranslateService } from '@ngx-translate/core';
import { IntroappPage } from '../pages/introapp/introapp';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage: any = HomePage;

  pages: Array<{ title: string, component: any, asset: string }>;
  buttonPages: Array<{ title: string, component: any, asset: string, text_color: string, button_color: string }>;

  constructor(public platform: Platform,
    public statusBar: StatusBar,
    public splashScreen: SplashScreen,
    public modalCtrl: ModalController,
    private translateService: TranslateService,
    public storage: Storage) {

    this.translateService.setDefaultLang('en')

    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, asset: 'assets/imgs/icon_menukiri_home.png' },
      { title: 'Zoo Map', component: ZooMapPage, asset: 'assets/imgs/icon_menukiri_map.png' },
      { title: 'Animal Collection', component: AnimalCollectionPage, asset: 'assets/imgs/icon_menukiri_animal.png' },
      { title: 'Visitor Information', component: VisitorInfoPage, asset: 'assets/imgs/icon_menukiri_profile.png' },
      { title: 'Settings', component: SettingsPage, asset: 'assets/imgs/icon_menukiri_settings.png' }
    ];

    this.buttonPages = [
      { title: 'Animal Badge Collection', component: BadgeCollectionPage, asset: 'assets/imgs/icon_menukiri_badge.png', text_color: '', button_color: 'button-color' },
      { title: 'Photo Booth', component: PhotoboothPage, asset: 'assets/imgs/icon_menukiri_photo.png', text_color: 'text-icon-color', button_color: 'button-color2' },
      { title: 'Animal Trivias', component: TriviasPage, asset: 'assets/imgs/icon_menukiri_trivia.png', text_color: '', button_color: 'button-color' }
    ]
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.storage.get('introShown').then((result) => {
        if (result) {
          this.rootPage = HomePage;
        } else {
          this.rootPage = IntroappPage;
          this.storage.set('introShown', true);
        }
      });
      this.statusBar.styleDefault();
      // let splash = this.modalCtrl.create(SplashscreenPage);
      // splash.present();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }

  openPageButton(page) {
    this.nav.setRoot(page.component)
  }
}

