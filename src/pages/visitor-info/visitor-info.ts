import { ContactusPage } from './../contactus/contactus';
import { ActivitiesPage } from './../activities/activities';
import { GetherePage } from './../gethere/gethere';
import { TicketPage } from './../ticket/ticket';
import { Component, ViewChild } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { SuperTabs } from 'ionic2-super-tabs';

/**
 * Generated class for the VisitorInfoPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-visitor-info',
  templateUrl: 'visitor-info.html',
})
export class VisitorInfoPage {
  @ViewChild(SuperTabs) superTabs: SuperTabs;

  ticket: any = TicketPage;
  gethere: any = GetherePage;
  activities: any = ActivitiesPage;
  contactus: any = ContactusPage;

  selectedIndex = 0;

  pages = [
    { pagename: this.ticket, title: 'Ticket' },
    { pagename: this.gethere, title: 'How to get Here' },
    { pagename: this.activities, title: 'Activities' },
    { pagename: this.contactus, title: 'Contact Us' },
  ];

  supertabid: any = null;

  // @ViewChild('swipedtabslider') swipedtabslider: Slides;

  // swipedTabIndicator: any = null;
  // tabbar: any = null;
  // tabs:any = [];

  constructor(public navCtrl: NavController, public navParams: NavParams) {

  }

  ionViewDidEnter() {
    // this.swipedTabIndicator = document.getElementById("indicator");
    // this.tabbar = document.getElementById("tabbar");
    this.supertabid = document.getElementById("supertabid");
  }

  ionViewDidLoad() {
    // this.tabs = ["Ticket", "How to get Here", "Activites", "Contact Us"];
    console.log('ionViewDidLoad VisitorInfoPage');
  }

  onTabSelect(event: any) {
    
  }

  slideToIndex() {

  }

  selectTab(index) {
    // this.swipedTabIndicator.style.webkitTransform = 'translate3d('+(100*index)+'%,0,0';
    // this.swipedtabslider.slideTo(index, 500);
  }

  updateIndicatorPosition() {
    // if (this.swipedtabslider.length() > this.swipedtabslider.getActiveIndex()) {
    //   if (this.swipedtabslider.getActiveIndex() == 0) {
    //     this.swipedTabIndicator.style.marginLeft = "35%";
    //     this.tabbar.style.marginLeft = "35%";
    //   } else if (this.swipedtabslider.getActiveIndex() == 1 || this.swipedtabslider.getActiveIndex() == 2) {
    //     this.swipedTabIndicator.style.marginLeft = "0";
    //     this.tabbar.style.marginLeft = "0";
    //   } else if (this.swipedtabslider.getActiveIndex() == 3) {
    //     this.swipedTabIndicator.style.marginLeft = "-35%";
    //     this.tabbar.style.marginLeft = "-35%";
    //   }
    //   this.swipedTabIndicator.style.webkitTransform = 'translate3d('+(this.swipedtabslider.getActiveIndex() * 100)+'%,0,0';
    // }
  }

  animateIndicator($event) {
    // if (this.swipedTabIndicator) {
    //   this.swipedTabIndicator.style.webkitTransform = 'translate3d('+(($event.progress * (this.swipedtabslider.length()-1)));
    // }
  }
}
