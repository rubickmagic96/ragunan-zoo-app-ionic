import { AnimalcollectionServiceProvider } from './../../providers/animalcollection-service/animalcollection-service';
import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

@Component({
  selector: 'page-animal-collection',
  templateUrl: 'animal-collection.html',
})
export class AnimalCollectionPage {
  //animals: Array<Array<{ asset: string, name: string, type: string }>>;
  animals: any;
  animalColl: Array<Array<{ asset: string, name: string, type: string }>> = [];
  all: number = 0;
  fishes: number = 0;
  mammal: number = 0;
  reptile: number = 0;
  aves: number = 0;

  constructor(public navCtrl: NavController, public navParams: NavParams, public animalService: AnimalcollectionServiceProvider) {
  }

  ionViewDidLoad() {
    this.animalService.load().then(response => {
      this.animals = response;

      this.countingEachAnimal(this.animals);
      this.animalColl = this.getAllAnimal(this.animals);
      // let ac = [];

      // this.animals.forEach((animal, index) => {
      //   if (ac.length != 2) {
      //     if (index % 2 == 0) {
      //       ac.push(animal);
      //     } else {
      //       ac.push(animal);
      //     }
      //   } else {
      //     this.animalColl.push(ac);
      //     ac = [];

      //     if (index % 2 == 0) {
      //       ac.push(animal);
      //     } else {
      //       ac.push(animal);
      //     }

      //     if (index == this.animals.length - 1) {
      //       ac.push(animal);
      //       this.animalColl.push(ac);
      //     }
      //   }
      // });
    });
    console.log('ionViewDidLoad AnimalCollectionPage');
  }

  countingEachAnimal(animals: any) {
    this.all = animals.length - 1;
    animals.forEach((animal, index) => {
      switch(animal.type) {
        case "mammal":
          this.mammal++;
          break;
        case "reptile":
          this.reptile++;
          break;
        case "aves":
          this.aves++;
          break;
        case "fishes":
          this.fishes++;
          break;
      }
    });
  }

  getAllAnimal(animals: any) {
    let data = [];
    let ac = [];

    animals.forEach((animal, index) => {
      if (ac.length != 2) {
        if (index % 2 == 0) {
          ac.push(animal);
        } else {
          ac.push(animal);
        }
      } else {
        data.push(ac);
        ac = [];

        if (index % 2 == 0) {
          ac.push(animal);
        } else {
          ac.push(animal);
        }

        if (index == animals.length - 1) {
          ac.push(animal);
          data.push(ac);
        }
      }
    });

    return data;
  }

  convertToAnimalArray(damal) {
    let ac = [];
    let dataanimal = [];

    damal.forEach((animal, index) => {
      if (ac.length != 2) {
        if (index % 2 == 0) {
          ac.push(animal);
        } else {
          ac.push(animal);
        }
      } else {
        dataanimal.push(ac);
        ac = [];

        if (index % 2 == 0) {
          ac.push(animal);
        } else {
          ac.push(animal);
        }

        if (index % 2 != 0 && index == this.animals.length - 1) {
          ac.push(animal);
          dataanimal.push(ac);
        }
      }
    });

    return dataanimal;
  }

  onChange(value) {
    switch(value) {
      case 'all':
        this.animalColl = this.getAllAnimal(this.animals);
        break;
      case 'fishes':
        let allfishes = []
        let fishes = [];

        this.animals.forEach((animal) => {
          if (animal.type == 'fishes') {
            fishes.push(animal);
            fishes.push(animal);
          }
        });

        allfishes.push(fishes);

        this.animalColl = allfishes;
        break;
      case 'mammal':
        let mammal = [];

        this.animals.forEach((animal) => {
          if (animal.type == 'mammal') {
            mammal.push(animal);
          }
        });

        console.log(mammal);

        this.animalColl = this.convertToAnimalArray(mammal);
        break;
      case 'aves':
        let aves = [];

        this.animals.forEach((animal) => {
          if (animal.type == 'aves') {
            aves.push(animal);
          }
        });

        console.log(aves);

        this.animalColl = this.convertToAnimalArray(aves);
        break;
      case 'reptile':
        let reptile = [];

        this.animals.forEach((animal) => {
          if (animal.type == 'reptile') {
            reptile.push(animal);
          }
        });

        console.log(reptile);

        this.animalColl = this.convertToAnimalArray(reptile);
        break;
    }
  }

}
