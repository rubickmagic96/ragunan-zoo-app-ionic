import { InGamePage } from './../in-game/in-game';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-trivias',
  templateUrl: 'trivias.html',
})
export class TriviasPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriviasPage');
  }

  openGame() {
    this.navCtrl.push(InGamePage);
  }
}
