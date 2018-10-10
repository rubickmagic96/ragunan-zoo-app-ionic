import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
} from '@ionic-native/google-maps';

@IonicPage()
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
      { "lat": -6.311593, "lng": 106.819864 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: bounds,
        zoom: 18,
        tilt: 30
      }
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/zoomap.png',
      'bounds': bounds,
      'opacity': 1.0,
      'clickable': false
    });
    // this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);
  }

}
