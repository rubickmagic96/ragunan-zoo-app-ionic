import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
  Marker,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-detail-animal',
  templateUrl: 'detail-animal.html',
})
export class DetailAnimalPage {
  @ViewChild('slides') slides: Slides;
  @ViewChild("animal_location") mapElement: ElementRef;
  map: GoogleMap;
  groundOverlay: GroundOverlay;
  animal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.slides.autoplayDisableOnInteraction = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAnimalPage');
    console.log(this.navParams.get('data'));
    this.animal = this.navParams.get('data');
    this.loadMap();
  }

  listenAudio() {

  }

  loadMap() {
    let bounds: ILatLng[] = [
      { "lat": -6.317619, "lng": 106.815068 },
      { "lat": -6.304710, "lng": 106.826508 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: { "lat": -6.311593, "lng": 106.819864 },
        zoom: 14,
        tilt: 30
      },
    };

    this.map = GoogleMaps.create('animal_location', mapOptions);
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/ragunanmap.png',
      'bounds': bounds,
      'opacity': 1.0,
    });
    this.map.addMarker(this.animal.location);
  }
}
