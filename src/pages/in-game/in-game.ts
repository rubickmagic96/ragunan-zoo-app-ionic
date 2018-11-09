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
  allQuestions: any;
  level: any;
  questions: any;
  theInterval: any;
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
    this.level = this.navParams.get('level');

    this.progress = document.getElementById("current-progress");

    this.slides.lockSwipes(true);

    this.quizProvider.load(this.level).then((data: Array<any>) => {

      data.map((question) => {
        let answersKey = Object.keys(question.answers);
        let answers = Object.keys(question.answers).map(key => question.answers[key]);
        let randomAnswerAndKey = this.randomizeAnswers(answersKey, answers);

        answersKey = randomAnswerAndKey[0];
        answers = randomAnswerAndKey[1];

        question.answer_key = answersKey;
        question.answer_val = answers;
      });

      this.allQuestions = data;
      data = this.randomizeQuestions(data);

      let ms = this.level == "easy" ? 100 : this.level == "medium" ? 75 : this.level == "hard" ? 50 : 0;

      this.questions = data;
      this.theInterval = setInterval(() => {
        this.scene();
      }, ms);
    })
  }

  randomizeQuestions(questions: any[]) {
    for (let i = questions.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempQuestion = questions[i];
      questions[i] = questions[j];
      questions[j] = tempQuestion;
    }

    questions.splice(10, questions.length - 1); //get only 10 questions

    return questions;
  }

  randomizeAnswers(keys: any[], vals: any[]) {
    for (let i = keys.length - 1; i > 0; i--) {
      let j = Math.floor(Math.random() * (i + 1));
      let tempKey = keys[i];
      let tempVal = vals[i];
      keys[i] = keys[j];
      vals[i] = vals[j];
      keys[j] = tempKey;
      vals[j] = tempVal;
    }

    return [keys, vals];
  }

  scene() {
    if (!this.pauseOn) {
      if (this.width <= 0) {
        // clearInterval(this.theInterval);
        this.width = 0;
        this.pauseOn = true;

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

        if (this.life == 0) {
          this.isGameOver = true;
        }

        this.currentQuestion = this.slides.getActiveIndex();
        this.slides.lockSwipes(false);
        this.slides.slideTo(this.questions.length + 1, 0);
        this.slides.lockSwipes(true);
      } else {
        this.width--;
        this.progress.style.width = this.width + "%";
      }
    }
  }

  checkAnswer(index, question, answer) {
    if (this.life > 0) {
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

    this.storage.get("score").then(async (score) => {
      if (score == undefined || score == null) {
        await this.storage.set("score", {
          "easy": 0,
          "medium": 0,
          "hard": 0
        });
      }

      await this.storage.get("score").then((scr) => {
        console.log(scr);
        if (this.level == "easy") {
          if (this.score > scr.easy) {
            this.storage.set("score", {
              "easy": this.score,
              "medium": scr.medium,
              "hard": scr.hard
            });
          }
        } else if (this.level == "medium") {
          if (this.score > scr.medium) {
            this.storage.set("score", {
              "easy": scr.easy,
              "medium": this.score,
              "hard": scr.hard
            });
          }
        } else if (this.level == "hard") {
          if (this.score > scr.hard) {
            this.storage.set("score", {
              "easy": scr.easy,
              "medium": scr.medium,
              "hard": this.score
            });
          }
        }
      })
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
      this.pauseOn = true;
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

    this.allQuestions.map((question) => {
      let answersKey = Object.keys(question.answers);
      let answers = Object.keys(question.answers).map(key => question.answers[key]);
      let randomAnswerAndKey = this.randomizeAnswers(answersKey, answers);

      answersKey = randomAnswerAndKey[0];
      answers = randomAnswerAndKey[1];

      question.answer_key = answersKey;
      question.answer_val = answers;
    });

    this.questions = this.randomizeQuestions(this.allQuestions);

    this.pauseOn = false;
    this.width = 100;

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
