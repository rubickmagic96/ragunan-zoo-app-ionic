import { StatusBar } from '@ionic-native/status-bar';
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { SplashscreenPage } from '../splashscreen/splashscreen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  constructor(public navCtrl: NavController, private statusBar: StatusBar) {
    this.statusBar.backgroundColorByHexString('#08a965');
  }

  openSplashPage() {
    this.navCtrl.push(SplashscreenPage);
  }
}
