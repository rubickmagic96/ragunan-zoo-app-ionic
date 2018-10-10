import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AnimalCollectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-animal-collection',
  templateUrl: 'animal-collection.html',
})
export class AnimalCollectionPage {
  animals: Array<Array<{ asset: string, name: string }>>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    this.animals = [
      [{ asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima' },
      { asset: 'assets/imgs/animals/thumb_13019.jpg', name: 'Ostrich' }],

      [ { asset: 'assets/imgs/animals/thumb_13018.jpg', name: 'Victoria Crowned' },
        { asset: 'assets/imgs/animals/thumb_13017.jpg', name: 'Flamingo' }],

      [ { asset: 'assets/imgs/animals/thumb_13016.jpg', name: 'Crowned Cane' },
        { asset: 'assets/imgs/animals/thumb_12011.jpg', name: 'Black Lizard' }],

      [ { asset: 'assets/imgs/animals/thumb_14001.jpg', name: 'Arapaima' }, 
        { asset: 'assets/imgs/animals/thumb_13015.jpg', name: 'Yellow-Crested' },],

      [{ asset: 'assets/imgs/animals/thumb_11034.jpg', name: 'Giraffe' },
      { asset: 'assets/imgs/animals/thumb_11031.jpg', name: 'Camel' },]
    ]
    console.log('ionViewDidLoad AnimalCollectionPage');
  }

}
