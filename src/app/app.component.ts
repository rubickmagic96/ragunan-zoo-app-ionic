import { Component, ViewChild } from '@angular/core';
import { Platform, Nav } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { HomePage } from '../pages/home/home';
import { ZooMapPage } from './../pages/zoo-map/zoo-map';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;
  rootPage:any = HomePage;

  pages: Array<{ title: string, component: any, asset: string }>;

  constructor(public platform: Platform, public statusBar: StatusBar,public splashScreen: SplashScreen) {
    this.initializeApp();

    this.pages = [
      { title: 'Home', component: HomePage, asset: 'assets/imgs/icon_menukiri_home.png' },
      { title: 'Zoo Map', component: ZooMapPage, asset: 'assets/imgs/icon_menukiri_map.png' },
      { title: 'Animal Collection', component: ZooMapPage, asset: 'assets/imgs/icon_menukiri_animal.png' },
      { title: 'Visitor Information', component: ZooMapPage, asset: 'assets/imgs/icon_menukiri_profile.png' },
      { title: 'Settings', component: ZooMapPage, asset: 'assets/imgs/icon_menukiri_settings.png' }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}

