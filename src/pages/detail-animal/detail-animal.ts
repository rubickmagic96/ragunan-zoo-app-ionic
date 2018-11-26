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
  scrollHeight: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidEnter(){
    this.slides.autoplayDisableOnInteraction = false;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DetailAnimalPage');

    let parent = document.querySelector('page-detail-animal ion-content .fixed-content');
    let realParent = document.getElementById('section-2');
    let child = document.getElementById('detail-nav');

    this.animal = this.navParams.get('data');
    this.loadMap();
    this.content.ionScroll.subscribe((data) => {
      console.log(data);
      this.scrollHeight = data.scrollHeight;
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
        target: { "lat": this.animal.location[0].position.lat, "lng": this.animal.location[0].position.lng },
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
    for(let i = 0; i < this.animal.location.length; i++) {
      this.map.addMarker(this.animal.location[0]);
    }
  }

  listenAudio() {

  }

  scrollToDesc() {
    this.content.scrollTo(0, this.scrollHeight - this.scrollHeight * 0.7);
  }

  scrollToGal() {
    this.content.scrollTo(0, this.scrollHeight - this.scrollHeight * 0.36);
  }

  scrollToFact() {
    this.content.scrollToBottom();
  }

  scrollToMap() {
    this.content.scrollTo(0, this.scrollHeight - this.scrollHeight * 0.33);
  }

  tapToScoll() {
    this.content.scrollToBottom();
  }
}
