import { Component, ViewChild, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-ticket',
  templateUrl: 'ticket.html',
})
export class TicketPage {
  @ViewChild("ticketmaps") mapElement: ElementRef;
  map: GoogleMap;
  groundOverlay: GroundOverlay;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TicketPage');
    this.loadMap();
  }

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
    };

    this.map = GoogleMaps.create('map_canvas', mapOptions);
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/newark_nj_1922.jpg',
      'bounds': bounds,
      'opacity': 1.0,
    });

  }
}
