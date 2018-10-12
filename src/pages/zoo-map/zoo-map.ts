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

  // south west
  // -6.315991, 106.816858
  // -6.317619, 106.815068
  // north east
  // -6.306394, 106.824495
  // -6.304710, 106.826508

  loadMap() {
    let bounds: ILatLng[] = [
      { "lat": -6.317619, "lng": 106.815068 }, 
      { "lat": -6.304710, "lng": 106.826508 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: { "lat": -6.311593, "lng": 106.819864 },
        zoom: 16,
        tilt: 30
      },
      preferences: {
        building: false
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
