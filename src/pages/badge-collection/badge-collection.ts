import { Component, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the BadgeCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-badge-collection',
  templateUrl: 'badge-collection.html',
})
export class BadgeCollectionPage {
  badges: Array<Array<{ name: string, asset: string }>>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgeCollectionPage');

    this.badges = [
      [
        { name: 'Sumatran Tiger', asset: 'assets/imgs/badges/badge_11001.png' },
        { name: 'Bear', asset: 'assets/imgs/badges/badge_11002.png' },
      ],
      [
        { name: 'Siamang', asset: 'assets/imgs/badges/badge_11003_grey.png' },
        { name: 'Gorilla', asset: 'assets/imgs/badges/badge_11004_grey.png' }
      ],
      [
        { name: 'Lion', asset: 'assets/imgs/badges/badge_11007_grey.png' },
        { name: 'Monkey Budeng', asset: 'assets/imgs/badges/badge_11012_grey.png' }
      ],
      [
        { name: 'Sambar Deer', asset: 'assets/imgs/badges/badge_11015_grey.png' },
        { name: 'Bornean Orangutan', asset: 'assets/imgs/badges/badge_11021_grey.png' }
      ],
      [
        { name: 'Java Bull', asset: 'assets/imgs/badges/badge_11025_grey.png' },
        { name: 'Sumatran Elephant', asset: 'assets/imgs/badges/badge_11029_grey.png' }
      ],
      [
        { name: 'Camel', asset: 'assets/imgs/badges/badge_11031_grey.png' },
        { name: 'King Cobra', asset: 'assets/imgs/badges/badge_12009_grey.png' },
      ],
      [
        { name: 'Yellow-Crested', asset: 'assets/imgs/badges/badge_13015_grey.png' },
      ]
    ]
  }

}