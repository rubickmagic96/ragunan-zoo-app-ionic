import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizProvider {
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello QuizProvider Provider');
  }

  load(level) {
    return new Promise((resolve) => {
      this.http.get('assets/data/quiz.json').subscribe(data => {
        this.data = data['questions'][level];

        console.log(this.data);

        resolve(this.data);
      })
    })
  }
}
