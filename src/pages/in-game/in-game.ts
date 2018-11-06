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
  score:number = 0;
  life:number = 3;
  slideOption: any;
  correctAnswer: boolean;
  currentQuestion: number;
  
  constructor(public navCtrl: NavController, public navParams: NavParams, public quizProvider: QuizProvider) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InGamePage');

    this.slides.lockSwipes(true);

    this.quizProvider.load().then((data) => {
      data.map((question) => {
        let answers = Object.keys(question.answers);
        question.answer_key = answers;
      });

      this.questions = data;
    })
  }

  checkAnswer(index, question, answer) {
    console.log(index + ": "+answer) //log answer

    if (this.life > 1) {
      if (question.correct_answer === answer) {
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
      }

      this.currentQuestion = index;
      this.slides.lockSwipes(false);
      this.slides.slideTo(this.questions.length + 1, 0);
      this.slides.lockSwipes(true);
    } else {
      document.getElementById('time-n-life').style.display = "none";
      document.getElementById('score').style.display = "none";
      document.getElementById('quiz').style.display = "none";
      document.getElementById('gameover').style.display = "block";
    }
  }

  nextQuestion() {
    this.slides.lockSwipes(false);
    this.slides.slideTo(this.currentQuestion + 1, 0);
    this.slides.lockSwipes(true);
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
    checkmark.forEach((marker) => {
      (marker as HTMLElement).style.backgroundColor = "#eee";
    })


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
