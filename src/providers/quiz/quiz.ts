import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class QuizProvider {
  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello QuizProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.resolve(this.data);
    }

    return new Promise(resolve => {
      this.http.get('assets/data/quiz.json').subscribe(data => {
        this.data = data['questions'];
        resolve(this.data);
      })
    })
  }
}
