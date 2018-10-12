import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnimalCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-animal-collection',
  templateUrl: 'animal-collection.html',
})
export class AnimalCollectionPage {
  animals: Array<Array<{ asset: string, name: string, type: string }>>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.animals = [
      [{ asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' },
      { asset: 'assets/imgs/animals/thumb_13019.jpg', name: 'Ostrich', type: 'aves' }],

      [{ asset: 'assets/imgs/animals/thumb_13018.jpg', name: 'Victoria Crowned', type: 'aves' },
        { asset: 'assets/imgs/animals/thumb_13017.jpg', name: 'Flamingo', type: 'aves' }],

      [{ asset: 'assets/imgs/animals/thumb_13016.jpg', name: 'Crowned Cane', type: 'aves' },
        { asset: 'assets/imgs/animals/thumb_12011.jpg', name: 'Black Lizard', type: 'reptile' }],

      [ { asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' }, 
        { asset: 'assets/imgs/animals/thumb_13015.jpg', name: 'Yellow-Crested', type: 'aves' }],

      [{ asset: 'assets/imgs/animals/thumb_11034.jpg', name: 'Giraffe', type: 'mammal' },
        { asset: 'assets/imgs/animals/thumb_11031.jpg', name: 'Camel', type: 'mammal' }]
    ]
    console.log('ionViewDidLoad AnimalCollectionPage');
  }

  onChange(value) {
    switch(value) {
      case 'all':
        this.animals = [
          [{ asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' },
          { asset: 'assets/imgs/animals/thumb_13019.jpg', name: 'Ostrich', type: 'aves' }],

          [{ asset: 'assets/imgs/animals/thumb_13018.jpg', name: 'Victoria Crowned', type: 'aves' },
          { asset: 'assets/imgs/animals/thumb_13017.jpg', name: 'Flamingo', type: 'aves' }],

          [{ asset: 'assets/imgs/animals/thumb_13016.jpg', name: 'Crowned Cane', type: 'aves' },
          { asset: 'assets/imgs/animals/thumb_12011.jpg', name: 'Black Lizard', type: 'reptile' }],

          [{ asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' },
          { asset: 'assets/imgs/animals/thumb_13015.jpg', name: 'Yellow-Crested', type: 'aves' }],

          [{ asset: 'assets/imgs/animals/thumb_11034.jpg', name: 'Giraffe', type: 'mammal' },
          { asset: 'assets/imgs/animals/thumb_11031.jpg', name: 'Camel', type: 'mammal' }]
        ];
        break;
      case 'fishes':
        this.animals = [
          [{ asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' }, { asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima', type: 'fishes' }]
        ];
        break;
      case 'mammal':
        this.animals = [
          [{ asset: 'assets/imgs/animals/thumb_11034.jpg', name: 'Giraffe', type: 'mammal' },
            { asset: 'assets/imgs/animals/thumb_11031.jpg', name: 'Camel', type: 'mammal' }]
        ];
        break;
      case 'aves':
        this.animals = [
          [
            { asset: 'assets/imgs/animals/thumb_13015.jpg', name: 'Yellow-Crested', type: 'aves' },
            { asset: 'assets/imgs/animals/thumb_13017.jpg', name: 'Flamingo', type: 'aves' }
          ],
          [
            { asset: 'assets/imgs/animals/thumb_13018.jpg', name: 'Victoria Crowned', type: 'aves' },
            { asset: 'assets/imgs/animals/thumb_13019.jpg', name: 'Ostrich', type: 'aves' }
          ]
        ];
        break;
      case 'reptile':
        this.animals = [
          [
            { asset: 'assets/imgs/animals/thumb_12011.jpg', name: 'Black Lizard', type: 'reptile' },
            { asset: 'assets/imgs/animals/thumb_12011.jpg', name: 'Black Lizard', type: 'reptile' }
          ]
        ];
    }
  }

}
