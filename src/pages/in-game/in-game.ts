import { Storage } from '@ionic/storage';
import { HomePage } from './../home/home';
import { QuizProvider } from './../../providers/quiz/quiz';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: 'page-in-game',
  templateUrl: 'in-game.html',
})
export class InGamePage {
  @ViewChild("slides") slides: Slides;
  questions: any;
  progress: any;
  width: number = 100;
  score: number = 0;
  life: number = 3;
  starCollected: number = 0;
  slideOption: any;
  correctAnswer: boolean;
  currentQuestion: number;
  isGameOver: boolean = false;
  pauseOn: boolean = false;

  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams, 
    public quizProvider: QuizProvider,
    public storage: Storage) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InGamePage');

    this.progress = document.getElementById("current-progress");

    this.slides.lockSwipes(true);

    this.quizProvider.load().then((data) => {
      data.map((question) => {
        let answers = Object.keys(question.answers);
        question.answer_key = answers;
      });

      this.questions = data;
      this.startTimer();
    })
  }

  scene() {
    if (!this.pauseOn) {
      if (this.width <= 0) {
        clearInterval();
      } else {
        this.width--;
        this.progress.style.width = this.width + "%";
      }
    }
  }

  startTimer() {
    setInterval(() => {
      this.scene();
    }, 50);
  }

  checkAnswer(index, question, answer) {
    if (this.life > 0) {
      if (question.correct_answer === answer && this.width > 0) {
        this.score++;
        this.correctAnswer = true;
      } else {
        this.life--;
        this.correctAnswer = false;

        let lifes = document.querySelectorAll(".lifes");
        for (let i = 0; i < lifes.length; i++) {
          if (i == lifes.length - 1) {
            lifes[i].classList.remove("lifes");
            lifes[i].classList.add("no-life");

            (lifes[i] as HTMLImageElement).src = "assets/imgs/life_off.png";
          }
        }

        console.log('lifes = ' + this.life);

        if (this.life == 0) {
          this.isGameOver = true;
        }
      }

      this.currentQuestion = index;
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.questions.length + 1, 0);
      this.slides.lockSwipes(true);
      this.pauseOn = true;
    }
  }

  goToGameOver() {
    document.getElementById('time-n-life').style.display = "none";
    document.getElementById('score').style.display = "none";
    document.getElementById('quiz').style.display = "none";
    document.getElementById('gameover').style.display = "block";
    this.isGameOver = false;

    this.storage.get("easy_score").then((score) => {
      if (score == 0 || score == undefined || score == null) {
        this.storage.set("easy_score", 0);
      }

      if (this.score > score) {
        this.storage.set("easy_score", this.score);
      }
    })
    
    if (this.score > 0 && this.score <= 4) {
      let star = document.getElementById("star1");
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
    } else if (this.score > 4 && this.score <= 9) {
      let star = document.getElementById("star1");
      let star2 = document.getElementById("star2");
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
    } else if (this.score > 9) {
      let star = document.getElementById("star1");
      let star2 = document.getElementById("star2");
      let star3 = document.getElementById("star3");
      (star as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
      (star2 as HTMLImageElement).src = "assets/imgs/trivias/star.png";
      (star3 as HTMLImageElement).src = "assets/imgs/trivias/star_small.png";
    }
  }

  nextQuestion() {
    this.pauseOn = false;
    this.width = 100;
    if (this.currentQuestion == this.questions.length - 1) {
      this.isGameOver = true;
    } else {
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.currentQuestion + 1, 0);
      this.slides.lockSwipes(true);
    }
  }

  playAgain() {
    document.getElementById('time-n-life').style.display = "block";
    document.getElementById('score').style.display = "block";
    document.getElementById('quiz').style.display = "block";
    document.getElementById('gameover').style.display = "none";

    this.score = 0;
    this.currentQuestion = 0;
    this.life = 3;

    this.slides.lockSwipes(false);
    this.slides.slideTo(0, 0);
    this.slides.lockSwipes(true);

    let checkmark = document.querySelectorAll(".container input:checked ~ .checkmark");
    for (let i = 0; i < checkmark.length; i++) {
      (checkmark[i] as HTMLElement).style.backgroundColor = "#eee";
    }


    let noLifes = document.querySelectorAll(".no-life");
    for (let i = 0; i < noLifes.length; i++) {
      noLifes[i].classList.remove("no-life");
      noLifes[i].classList.add("lifes");

      (noLifes[i] as HTMLImageElement).src = "assets/imgs/life.png";
    }
  }

  backToHomePage() {
    this.navCtrl.setRoot(HomePage);
  }
}
