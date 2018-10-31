import { HttpClient } from '@angular/common/http';
import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';

import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  GoogleMapsEvent,
  ILatLng,
  Marker,
  MarkerOptions,
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

  animalLocation: Array<{ position: { lat: number, lng: number }, icon: { url: string, size: { width: number, height: number } }}>;
  foodLocation: Array<{ position: { lat: number, lng: number }, icon: { url: string, size: { width: number, height: number } } }>;
  parkingLocation: Array<{ position: { lat: number, lng: number }, icon: { url: string, size: { width: number, height: number } } }>;
  restroomLocation: Array<{ position: { lat: number, lng: number }, icon: { url: string, size: { width: number, height: number } } }>;
  exitLocation: Array<{ position: { lat: number, lng: number }, icon: { url: string, size: { width: number, height: number } } }>;

  selectionsMarker: Array<string> = [ 'animal', 'food', 'parking', 'restroom', 'exit' ]
  currentSelectionMarker: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public http: HttpClient) {
  }

  ionViewDidLoad() {
    this.currentSelectionMarker = this.selectionsMarker[0];
    this.http.get('assets/data/ragunan_map.json').subscribe((response) => {
      this.animalLocation = response['animals'];
      this.foodLocation = response['foods'];
      this.parkingLocation = response['parkings'];
      this.restroomLocation = response['restrooms'];
      this.exitLocation = response['exits'];

      this.loadMap();
    })
  }

  loadMap() {
    let markers: Marker[] = [];
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

    for (var i = 0; i < this.animalLocation.length; i++) {
      markers.push(this.map.addMarkerSync(this.animalLocation[i]));
    }

    for (var i = 0; i < this.foodLocation.length; i++) {
      markers.push(this.map.addMarkerSync(this.foodLocation[i]));
    }

    for (var i = 0; i < this.parkingLocation.length; i++) {
      markers.push(this.map.addMarkerSync(this.parkingLocation[i]));
    }

    for (var i = 0; i < this.restroomLocation.length; i++) {
      markers.push(this.map.addMarkerSync(this.restroomLocation[i]));
    }

    for (var i = 0; i < this.exitLocation.length; i++) {
      markers.push(this.map.addMarkerSync(this.exitLocation[i]));
    }

    // markers.forEach((marker) => {
    //   marker.setVisible(false);
    // });

    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/ragunanmap.png',
      'bounds': bounds,
      'opacity': 1.0,
    });
    // this.map = GoogleMaps.create(this.mapElement.nativeElement, mapOptions);
  }

  onSearchBtnTap() {
    this.currentSelectionMarker = this.selectionsMarker[0];
  }

  onFoodBtnTap() {
    this.currentSelectionMarker = this.selectionsMarker[1];
  }

  onParkingBtnTap() {
    this.currentSelectionMarker = this.selectionsMarker[2];
  }

  onRestroomBtnTap() {
    this.currentSelectionMarker = this.selectionsMarker[3];
  }

  onExitBtnTap() {
    this.currentSelectionMarker = this.selectionsMarker[4];
  }
}
/* exit marker location */
// exit1 : -6.305839, 106.820413
// exit2 : -6.312098, 106.824996
// exit3 : -6.311632, 106.825285
// exit4 : -6.307130, 106.821424
// exit5 : -6.317352, 106.822017
/* restroom marker location */
// restroom1 : -6.308170, 106.819006
// restroom2 : -6.310609, 106.819132
// restroom3 : -6.306628, 106.822795
// restroom4 : -6.312026, 106.824617
// restroom5 : -6.314519, 106.823751
/* parking marker location */
// parking1 : -6.317301, 106.822284,
// parking2 : -6.312133, 106.824576
// parking3 : -6.307352, 106.821208
// parking4 : -6.306100, 106.820115
/* food marker location */
// food1 : -6.307507, 106.822380
// food2 : -6.307184, 106.821893
// food3 : -6.310627, 106.819475
/* animal marker location */
// keledai : -6.308170, 106.819385
// buaya : -6.307345, 106.821911
// kuda nil : -6.307058, 106.823282
// kuda nil 2 : -6.307542, 106.824004
// burung : -6.308583, 106.824166
// keledai 2 : -6.309713, 106.824419
// keledai 3 : -6.310538, 106.825195
// banteng : -6.311147, 106.824365
// keledai 4 : -6.311614, 106.824383
// dibawahnya keledai 4 : -6.311596, 106.823679
// beruang : -6.313622, 106.824166
// singa : -6.314698, 106.824617
// beruang 2 : -6.316348, 106.824527
// sipanse : -6.311040, 106.823120
// sipanse 2 : -6.311380, 106.820991
// harimau : -6.308977, 106.821351
// gajah : -6.310179, 106.819457
// komodo : -6.310340, 106.818879
// monyet : -6.313407, 106.821225
// monyet hitam : -6.313694, 106.821442
// gorilla : -6.313945, 106.820052
// monyet kecil hitam : -6.314842, 106.820106

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