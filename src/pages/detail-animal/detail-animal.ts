import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, NavParams, Slides, Content } from 'ionic-angular';
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
  @ViewChild(Content) content: Content;
  @ViewChild('slides') slides: Slides;
  @ViewChild('animalloc') mapElement: ElementRef;
  map: GoogleMap;
  groundOverlay: GroundOverlay;
  animal: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  // onPageScroll(event) {
  //   console.log(event.target.scrollTop);
  // }

  tapToScoll() {
    this.content.scrollToBottom();
  }

  ionViewDidEnter(){
    this.slides.autoplayDisableOnInteraction = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAnimalPage');

    let parent = document.querySelector('page-detail-animal ion-content .fixed-content');
    let realParent = document.getElementById('section-2');
    console.log(realParent)
    let child = document.getElementById('detail-nav');

    this.animal = this.navParams.get('data');
    this.loadMap();
    this.content.ionScroll.subscribe((data) => {
      console.log(data.scrollTop);
      if (data.scrollTop > 588) {
        child.style.position = 'absolute';
        child.style.zIndex = '999';
        parent.appendChild(child);
      } else {
        child.style.position = 'static';
        child.style.zIndex = '1';
        realParent.insertBefore(child, realParent.childNodes[0]);
      }
    })
  }

  loadMap() {
    let bounds: ILatLng[] = [
      { "lat": -6.317619, "lng": 106.815068 },
      { "lat": -6.304710, "lng": 106.826508 }
    ];

    let mapOptions: GoogleMapOptions = {
      camera: {
        target: { "lat": this.animal.location.position.lat, "lng": this.animal.location.position.lng },
        zoom: 15,
        tilt: 30
      },
    };

    this.map = GoogleMaps.create('animalloc', mapOptions);
    this.groundOverlay = this.map.addGroundOverlaySync({
      'url': 'assets/imgs/ragunanmap.png',
      'bounds': bounds,
      'opacity': 1.0,
    });
    this.map.addMarker(this.animal.location);
  }

  listenAudio() {

  }

  scrollToDesc() {
    this.content.scrollTo(0, 615);
  }

  scrollToGal() {
    this.content.scrollTo(0, 1255);
  }

  scrollToFact() {
    this.content.scrollToBottom();
  }

  scrollToMap() {
    this.content.scrollTo(0, 1305);
  }
}
