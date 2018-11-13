import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable()
export class AnimalcollectionServiceProvider {

  data: any;

  constructor(public http: HttpClient) {
    console.log('Hello AnimalcollectionServiceProvider Provider');
  }

  load() {
    if (this.data) {
      return Promise.all(this.data);
    }

    return new Promise((resolve) => {
      this.http.get('assets/data/animal_collection.json').subscribe(data => {
        this.data = data["data"];

        resolve(this.data);
      });
    });
  }

}
