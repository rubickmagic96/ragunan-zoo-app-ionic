import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams, Slides } from 'ionic-angular';

@Component({
  selector: "page-introapp",
  templateUrl: "introapp.html"
})
export class IntroappPage {
  @ViewChild("slides")
  slides: Slides;

  slideContent: Array<{ title: string; desc: string }>;
  currentActiveContent: { title: string; desc: string } = {
    title: "Learn",
    desc:
      "Mengenal Kebon Binatang Ragunan, Rencanakan Kunjungan kamu dan liat puluhan koleksi hewan yang ada di Ragunan"
  };

  constructor(public navCtrl: NavController, public navParams: NavParams) {}

  ionViewDidLoad() {
    this.slideContent = [
      {
        title: "Learn",
        desc:
          "Mengenal Kebon Binatang Ragunan, Rencanakan Kunjungan kamu dan liat puluhan koleksi hewan yang ada di Ragunan"
      },
      {
        title: "Listen",
        desc:
          "Dengarkan macam-macam suara hewan yang menarik dan jawab semua Quiz Hewan!"
      },
      {
        title: "Completed",
        desc:
          "Kumpulkan semua badge hewan dan Suara Hewan dengan menyelesaikan semua tantangannya"
      }
    ];
  }

  onSlideChanged() {
    let currentIndex = this.slides.getActiveIndex();
    if (currentIndex < this.slideContent.length) {
      this.currentActiveContent.title = this.slideContent[currentIndex].title;
      this.currentActiveContent.desc = this.slideContent[currentIndex].desc;
    } else {
      this.currentActiveContent.title = this.slideContent[
        currentIndex - 1
      ].title;
      this.currentActiveContent.desc = this.slideContent[currentIndex - 1].desc;
    }
  }
}
