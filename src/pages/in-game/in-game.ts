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
  currentSlide: number = 0;
  currentScore: number = 0;
  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    // this.result = document.getElementById('result');
    // this.result.style.display = "none";
    console.log('ionViewDidLoad InGamePage');
  }

  ionViewCanEnter() {
    this.http.get('assets/data/quiz.json').subscribe((response) => {
      this.quiz = response['questions'];

      this.buildQuiz(this.quiz);
      let quizz = this.quiz;
      let score = this.currentScore;
      let answers = document.querySelectorAll(".radio-answer");
      for (let i = 0; i < answers.length; i++) {
        let currentItem = answers[i];
        currentItem.addEventListener("click", () => {
          this.checkAnswer(currentItem, quizz);
        });
      }
      // document.querySelectorAll(".radio-answer").forEach((item, index) => {
      //   console.log(index);
      //   item.addEventListener('click', function() {
      //     item.setAttribute('name', `question${index}`);
      //     checkAnswer(item, this.quiz);
      //   })
      // });
      this.showSlide(0);

      this.currentScore = score;
    });
  }

  nextQuestion() {
    if (this.currentSlide < 10) {
      document.getElementById('result').style.display = 'none';
      document.getElementById('game').style.display = 'block';
      this.showSlide(this.currentSlide + 1);
    } else {
      document.getElementById('result').style.display = 'none';
      document.getElementById('game').style.display = 'none';
      document.getElementById('gameover').style.display = 'block';
    }
  }

  buildQuiz(questionsList) {
    const output = [];

    questionsList.forEach((question, index) => {
      const answers = [];
      for (const answer in question.answers) {
        answers.push(
          `<label class="container">${question.answers[answer]}
            <input class="radio-answer" type="radio" name="question${index}" value="${answer}">
            <span class="checkmark"></span>
           </label>`
        )
      }

      output.push(
        `<div class="slides">
        <h4 class="question">${question.question}</h4>
        <div class="answers">
          ${answers.join('')}
        </div>
      </div>`
      )
    });

    document.getElementById('game').innerHTML = output.join('');
  }

  checkAnswer(item, quiz) {
    console.log(item);
    let currentIndex = 0;
    const currentQuestion = item.name.substr(item.name.length - 1);
    quiz.forEach((question) => {
      if (currentIndex == currentQuestion) {
        if (question.correct_answer == item.value) {
          this.showResult(true);
          this.currentScore++;
        } else {
          console.log(question.correct_answer);
          console.log(item.value);
          this.showResult(false);
        }
      }
      currentIndex++;
    });
  }

  showResult(answer) {
    document.getElementById('result').style.display = 'block';
    document.getElementById('game').style.display = 'none';

    if (answer) {
      document.getElementById('result-info').innerText = "Correct!";
      document.getElementById('result-info').style.color = "green";
    } else {
      document.getElementById('result-info').innerText = "Wrong!";
      document.getElementById('result-info').style.color = "red";
    }
  }

  showSlide(slide) {
    const slides = document.querySelectorAll('.slides');
    slides[this.currentSlide].classList.remove('active-slide');
    slides[slide].classList.add('active-slide');
    this.currentSlide = slide;
  }

  restart() {
    this.currentScore = 0;
    this.currentSlide = 0;
  }
}
