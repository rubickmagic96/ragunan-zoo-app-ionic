import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-in-game',
  templateUrl: 'in-game.html',
})
export class InGamePage {
  game: any;
  result: any;
  quiz: any;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.game = document.getElementById('game');
    this.result = document.getElementById('result');
    this.game.style.display = "block";
    this.result.style.display = "none";
    console.log('ionViewDidLoad InGamePage');
  }

  ionViewCanEnter(){
    this.http.get('assets/data/quiz.json').subscribe((response) => {
      this.quiz = response['questions'];

      console.log(this.quiz[0]);
    });
  }

  toggleTo() {
    console.log('running');
    if (this.game.style.display === 'none') {
      this.game.style.display = 'block';
      this.result.style.display = 'none';
    } 
    else if (this.result.style.display === 'none') {
      this.result.style.display = 'block';
      this.game.style.display = 'none';
    }
  }
}
