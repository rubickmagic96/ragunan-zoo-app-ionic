import { Storage } from '@ionic/storage';
import { InGamePage } from './../in-game/in-game';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-trivias',
  templateUrl: 'trivias.html',
})
export class TriviasPage {

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TriviasPage');

    this.storage.get("easy_score").then((score) => {
      if (score > 0 && score <= 4) {
        let star = document.getElementById("easy-star1");
        (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      } else if (score > 4 && score <= 9) {
        let star = document.getElementById("easy-star1");
        let star2 = document.getElementById("easy-star2");
        (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
        (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
      } else if (score > 9) {
        let star = document.getElementById("easy-star1");
        let star2 = document.getElementById("easy-star2");
        let star3 = document.getElementById("easy-star3");
        (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
        (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
        (star3 as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      }
    });
  }

  openGame() {
    this.navCtrl.push(InGamePage);
  }
}
