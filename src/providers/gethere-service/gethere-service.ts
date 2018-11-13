import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class GethereServiceProvider {
  data: any;
  constructor(public http: HttpClient) {
    console.log('Hello GethereServiceProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.all(this.data);
    }

    return new Promise((resolve) => {
      this.http.get('assets/data/how_to_get_here.json').subscribe(data => {
        this.data = data["data"];

        resolve(this.data);
      });
    });
  }
}
