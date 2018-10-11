import { BadgeCollectionPage } from './../badge-collection/badge-collection';
import { PhotoboothPage } from './../photobooth/photobooth';
import { VisitorInfoPage } from './../visitor-info/visitor-info';
import { AnimalCollectionPage } from './../animal-collection/animal-collection';
import { StatusBar } from '@ionic-native/status-bar';
import { Component, ViewChild } from '@angular/core';
import { NavController, Slides } from 'ionic-angular';
import { DetailAnimalPage } from '../detail-animal/detail-animal';
import { ZooMapPage } from '../zoo-map/zoo-map';
import { NativeAudio } from '@ionic-native/native-audio';
//import { SplashscreenPage } from '../splashscreen/splashscreen';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild('slides') slides: Slides;
  @ViewChild('slidesCarousel') slidesCarousel: Slides;

  slideitems: Array<{ title: string, assetcover: string }>;
  slideitemAnimals: Array<{ name: string, assetimage: string, fact: string, share: boolean }>;

  animalcollection = AnimalCollectionPage;
  visitorinfo = VisitorInfoPage;
  zoomap = ZooMapPage;
  photobooth = PhotoboothPage;
  animalbadge = BadgeCollectionPage;

  animalName: string;
  shareFact: boolean;

  constructor(public navCtrl: NavController, private statusBar: StatusBar, public nativeAudio: NativeAudio) {
    this.statusBar.backgroundColorByHexString('#08a965');
  }

  ionViewDidEnter(){
    this.slides.autoplayDisableOnInteraction = false;
    this.slidesCarousel.autoplayDisableOnInteraction = false;
  }

  ionViewDidLoad() {
    this.slideitems = [
      { title: 'Blue Peacock has a very beautiful feather', assetcover: 'assets/imgs/carousel/cover2.jpg' },
      { title: 'Do you know that tiger is a very good swimmer', assetcover: 'assets/imgs/carousel/cover3.jpg' },
      { title: 'Monkey Loves Selfie!', assetcover: 'assets/imgs/carousel/cover4.jpg' }
    ]

    this.slideitemAnimals = [
      { name: 'Visitor Rule', assetimage: 'assets/imgs/visitor_icon.jpg', fact: 'Loves the animal, keep them safe, please follow the visitor rules', share: false },
      { name: 'Animal Welfare', assetimage: 'assets/imgs/animal_icon.jpg', fact: 'Like human, animal feels hunger, fear, pain and stress! Let them be free of them!', share: false },
      { name: 'King Cobra', assetimage: 'assets/imgs/animals/thumb_12009.jpg', fact: 'Cobra nice fact.', share: true },
      { name: 'Gorilla', assetimage: 'assets/imgs/animals/thumb_11004.jpg', fact: 'Gorilla nice fact.', share: true },
      { name: 'White Tiger', assetimage: 'assets/imgs/animals/thumb_11017.jpg', fact: 'White tiger nice face.', share: true }
    ]
  }

  playTigerSound() {
    this.nativeAudio.preloadSimple('tigersound', 'assets/wavs/Tiger7.wav').then(() => {
      this.nativeAudio.play('tigersound').then(() => {
        console.log('sound is done playing!');
      }, (error) => {
        console.log('error playing sound: '+error)
      })
    }, (error) => {
      console.log('error load the sound:'+error);
    });
  }

  onAboutTap(name) {
    this.navCtrl.push(DetailAnimalPage, {data: name});
  }

  onShareTap() {
    console.log('share to social media.');
  }

  slidesChanged() {
    let currentIndex = this.slides.getActiveIndex();
    console.log(currentIndex);
    if (currentIndex > this.slideitemAnimals.length) {
      this.animalName = this.slideitemAnimals[0].name;
      this.shareFact = this.slideitemAnimals[0].share;
    } else {
      this.animalName = this.slideitemAnimals[currentIndex - 1].name;
      this.shareFact = this.slideitemAnimals[currentIndex - 1].share;
    }
    // console.log('Real Index : '+this.slides.realIndex);
    // console.log('Active Slide Index : '+currentIndex);
    // console.log('Previoues Slide Index : '+this.slides.getPreviousIndex());
    // console.log('total slide = '+this.slides.length());
    // for (var i = 0; i < this.slideitemAnimals.length; i++) {
    //   if (this.slides.getActiveIndex() == i) {
    //     console.log('Selected Content Index : '+i);
    //     console.log('Active Index : '+this.slides.getActiveIndex());
    //     this.animalName = this.slideitemAnimals[i].name;
    //     this.shareFact = this.slideitemAnimals[i].share;
    //   } else {
    //     console.log('not equal : '+i);
    //   }
    // }
  }

  onSlideTaps(item) {
    this.navCtrl.push(DetailAnimalPage, { animal: item })
  }

  onPageTap(page) {
    this.navCtrl.push(page);
  }

  // openSplashPage() {
  //   this.navCtrl.push(SplashscreenPage);
  // }
}
