import { NativeAudio } from '@ionic-native/native-audio';
import { Dialogs } from '@ionic-native/dialogs';

import { Component } from '@angular/core';
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
  badges: Array<Array<{ name: string, asset: string, soundpath: string, id: string }>>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public nativeAudio: NativeAudio, public dialogs: Dialogs) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad BadgeCollectionPage');

    this.badges = [
      [
        { name: 'Sumatran Tiger', asset: 'assets/imgs/badges/badge_11001.png', soundpath: 'assets/wavs/Tiger7.wav', id: 'tigersound'},
        { name: 'Bear', asset: 'assets/imgs/badges/badge_11002.png', soundpath: 'assets/wavs/bear.wav', id: 'bearsound' },
      ],
      [
        { name: 'Siamang', asset: 'assets/imgs/badges/badge_11003_grey.png', soundpath: '', id: '' },
        { name: 'Gorilla', asset: 'assets/imgs/badges/badge_11004_grey.png', soundpath: '', id: '' }
      ],
      [
        { name: 'Lion', asset: 'assets/imgs/badges/badge_11007_grey.png', soundpath: '', id: '' },
        { name: 'Monkey Budeng', asset: 'assets/imgs/badges/badge_11012_grey.png', soundpath: '', id: '' }
      ],
      [
        { name: 'Sambar Deer', asset: 'assets/imgs/badges/badge_11015_grey.png', soundpath: '', id: '' },
        { name: 'Bornean Orangutan', asset: 'assets/imgs/badges/badge_11021_grey.png', soundpath: '', id: '' }
      ],
      [
        { name: 'Java Bull', asset: 'assets/imgs/badges/badge_11025_grey.png', soundpath: '', id: '' },
        { name: 'Sumatran Elephant', asset: 'assets/imgs/badges/badge_11029_grey.png', soundpath: '', id: '' }
      ],
      [
        { name: 'Camel', asset: 'assets/imgs/badges/badge_11031_grey.png', soundpath: '', id: '' },
        { name: 'King Cobra', asset: 'assets/imgs/badges/badge_12009_grey.png', soundpath: '', id: '' },
      ],
      [
        { name: 'Yellow-Crested', asset: 'assets/imgs/badges/badge_13015_grey.png', soundpath: '', id: '' },
      ]
    ]
  }

  playSound(soundpath, id) {
    if (soundpath != '' && id != '') {
      this.nativeAudio.preloadSimple(id, soundpath).then(() => {
        this.nativeAudio.play(id).then(() => {
          console.log('sound is done playing!');
        }, (error) => {
          console.log('error playing sound: ' + error)
        })
      }, (error) => {
        console.log('error load the sound:' + error);
      });
    } else {
      this.dialogs.alert('You don\'t have this badge yet, please collect them first', 'Warning', 'Oke').then(
        () => console.log('dialog dissmissed')
      ).catch(e => console.log('Error displaying dialog ', e));
    }
  }
}