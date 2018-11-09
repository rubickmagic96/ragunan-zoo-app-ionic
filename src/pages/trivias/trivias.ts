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

    this.storage.get("score").then((score) => {
      if (score != undefined || score != null) {
        let scoreKey = Object.keys(score);
        let scoreVal = Object.keys(score).map(key => score[key]);

        for (let i = 0; i < scoreKey.length; i++) {
          if (scoreKey[i] == "easy") {
            this.givingStar("easy", scoreVal[i]);
          } else if (scoreKey[i] == "medium") {
            this.givingStar("medium", scoreVal[i]);
          } else if (scoreKey[i] == "hard") {
            this.givingStar("hard", scoreVal[i]);
          }
        }
      }
    });
  }

  openGame(level) {
    this.navCtrl.push(InGamePage, {
      level: level
    });
  }

  givingStar(level: string, score: number) {
    console.log(level + ": " + score);
    if (score > 0 && score <= 4) {
      let star = document.getElementById(`${level}-star1`);
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
    } else if (score > 4 && score <= 9) {
      let star = document.getElementById(`${level}-star1`);
      let star2 = document.getElementById(`${level}-star2`);
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
    } else if (score > 9) {
      let star = document.getElementById(`${level}-star1`);
      let star2 = document.getElementById(`${level}-star2`);
      let star3 = document.getElementById(`${level}-star3`);
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
      (star3 as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
    }
  }
}
