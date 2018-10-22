import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
} from '@ionic-native/google-maps';
// import { ImageResizer, ImageResizerOptions } from '@ionic-native/image-resizer';

@Component({
  selector: 'page-zoo-map',
  templateUrl: 'zoo-map.html',
})
export class ZooMapPage {
  @ViewChild("map_canvas") mapElement: ElementRef;
  map: GoogleMap;
  groundOverlay: GroundOverlay;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('loaded');
    this.loadMap();
  }

  loadMap() {
    let bounds: ILatLng[] = [
      { "lat": -6.318346, "lng": 106.815952 }, 
      { "lat": -6.305505, "lng": 106.827089 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: { "lat": -6.311593, "lng": 106.819864 },
        zoom: 16,
        tilt: 30
      },
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/ragunanmap.png',
      'bounds': bounds,
      'opacity': 1.0,
    });
    // this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);
  }

}

/* ground overlay coords test */
// south west
  // -6.315991, 106.816858
  // -6.317619, 106.815068
  // -6.308051, 106.828072
  // -6.317800, 106.816313
  // -6.317960, 106.816195
  // -6.317981, 106.815830

  // -6.318098, 106.815412
  // -6.318034, 106.814864
  // -6.318311, 106.817535
  // -6.316125, 106.816408
  // -6.317665, 106.816320
  // -6.317760, 106.815998
  // -6.318346, 106.815952

  // north east
  // -6.306394, 106.824495
  // -6.304710, 106.826508
  // -6.316454, 106.817214
  // -6.304600, 106.828699
  // -6.304888, 106.828731
  // -6.305030, 106.828188
  // -6.306406, 106.824487
  // -6.305823, 106.825697
  // -6.305861, 106.828121
  // -6.305712, 106.827295
  // -6.305505, 106.827089