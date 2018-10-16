import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the GetherePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
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
    console.log('ionViewDidLoad GetherePage');
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
