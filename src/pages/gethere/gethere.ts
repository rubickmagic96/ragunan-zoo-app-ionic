import { Component, ElementRef, ViewChild } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {
  GoogleMaps,
  GoogleMap,
  GoogleMapOptions,
  GroundOverlay,
  ILatLng,
} from '@ionic-native/google-maps';

@Component({
  selector: 'page-gethere',
  templateUrl: 'gethere.html',
})
export class GetherePage {
  car: any = null;
  bus: any = null;
  carspan: any = null;
  busspan: any = null;
  carimg: any = null;
  busimg: any = null;
  carcontent: any = null;
  buscontent: any = null;

  @ViewChild("getdirection_maps") mapElement: ElementRef;
  map: GoogleMap;
  groundOverlay: GroundOverlay;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.car = document.getElementById('car');
    this.bus = document.getElementById('bus');

    this.carspan = document.getElementById('carspan');
    this.busspan = document.getElementById('busspan');

    this.carimg = document.getElementById('carimg');
    this.busimg = document.getElementById('busimg');

    this.carcontent = document.getElementById('car-routes');
    this.buscontent = document.getElementById('bus-routes');
  }

  ionViewDidLoad() {
    this.loadMap();
    console.log('ionViewDidLoad GetherePage');
  }

  loadMap() {
    let bounds: ILatLng[] = [
      { "lat": -6.317619, "lng": 106.815068 },
      { "lat": -6.304710, "lng": 106.826508 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: { "lat": -6.311593, "lng": 106.819864 },
        zoom: 13,
        tilt: 30
      },
    };

    this.map = GoogleMaps.create('getdirection_maps', mapOptions);
    // this.groundOverlay = this.map.addGroundOverlaySync({
    //   'url': 'assets/imgs/newark_nj_1922.jpg',
    //   'bounds': bounds,
    //   'opacity': 1.0,
    // });

  }

  changeToRouteCar() {
    this.car.style.backgroundColor = "darkgreen";
    this.carspan.style.color = "#fff";
    this.carimg.src = "assets/imgs/icon_car_on.png"
    this.carcontent.style.display = "block";

    this.bus.style.backgroundColor = "green";
    this.busspan.style.color = "#ccc";
    this.busimg.src = "assets/imgs/icon_bus_off.png";
    this.buscontent.style.display = "none";
  }

  changeToRouteBus() {
    this.bus.style.backgroundColor = "darkgreen";
    this.busspan.style.color = "#fff";
    this.busimg.src = "assets/imgs/icon_bus_on.png"
    this.buscontent.style.display = "block";

    this.car.style.backgroundColor = "green";
    this.carspan.style.color = "#ccc";
    this.carimg.src = "assets/imgs/icon_car_off.png";
    this.carcontent.style.display = "none";
  }

}
