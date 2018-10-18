import { Component, ElementRef } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ActivitiesPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@Component({
  selector: 'page-activities',
  templateUrl: 'activities.html',
})
export class ActivitiesPage {
  contentToggle: any;
  reminderContent: any;

  remind1Text: any;
  remind2Text: any;
  remind3Text: any;
  remind4Text: any;
  remind5Text: any;

  showReminder: boolean = false;
  addReminder1: boolean = false;
  addReminder2: boolean = false;
  isMoreThanOneElement: boolean = false;

  activitesData: Array<{time: string, animals: Array<{asset: string, activity: string, id: string}>}>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public elementRef: ElementRef) {
  }

  ionViewDidLoad() {
    this.activitesData = [
      { time: "09:00", animals: [
        { asset: "assets/imgs/icon/icon_11004.png", activity: "Feeding the Gorilla", id: "feed1" },
        { asset: "assets/imgs/icon/icon_11022.png", activity: "Feeding the Orangutan", id: "feed2" },
      ] },
      {
        time: "12:00", animals: [
          { asset: "assets/imgs/icon/icon_11004.png", activity: "Feeding the Gorilla", id: "feed3" },
        ]
      },
      {
        time: "13:00", animals: [
          { asset: "assets/imgs/icon/icon_11022.png", activity: "Feeding the Orangutan", id: "feed4" },
        ]
      },
      {
        time: "15:00", animals: [
          { asset: "assets/imgs/icon/icon_11004.png", activity: "Feeding the Gorilla", id: "feed5" },
        ]
      }
    ];

    console.log('ionViewDidLoad ActivitiesPage');
  }

  ionViewDidEnter(){
    this.contentToggle = document.getElementById('content-toggle');
    this.reminderContent = document.getElementById('reminder-content');
    this.remind1Text = document.getElementById('feed1');
    this.remind2Text = document.getElementById('remind2');
    this.remind3Text = document.getElementById('remind3');
    this.remind4Text = document.getElementById('remind4');
    this.remind5Text = document.getElementById('remind5');
  }

  onTapShowReminder() {
    if (!this.showReminder) {
      this.contentToggle.style.display = "none";
      this.reminderContent.style.display = "block";
      this.showReminder = true;
    } else {
      this.contentToggle.style.display = "block";
      this.reminderContent.style.display = "none";
      this.showReminder = false;
    }
  }

  checkClassOfElement(element, cls) {
    return (" " + element.clasName + " ").indexOf(" " + cls + " ") > -1;
  }

  onRemindTap(id: string) {
    switch(id) {
      case "feed1":
        if (this.reminderContent.childNodes[0]) {
          
        } else {
          var feedingTime = document.createElement("div");
          var clock9 = document.createElement("div");
          var text = document.createElement("span");

          var ionCard = document.createElement("ion-card");
          var ionCardHeader = document.createElement("ion-card-header");
          var image = document.createElement("img");
          var ptag = document.createElement("p");
          var divider = document.createElement("div");
          var ionCardContent = document.createElement("ion-card-content");
          var viewmap = document.createElement("h1");
          var remove = document.createElement("h1");

          image.src = this.activitesData[0].animals[0].asset;
          ptag.innerHTML = this.activitesData[0].animals[0].activity;

          divider.classList.add("card-divider");
          viewmap.classList.add("view-map");
          remove.classList.add("remove");
          viewmap.innerHTML = "View Map";
          remove.innerHTML = "Remove from Reminder";
          remove.setAttribute("id", "remover1");

          clock9.classList.add("feeding-time-bar");
          text.innerHTML = this.activitesData[0].time;

          /* ionic attribute */
          ionCard.classList.add("card");
          ionCard.classList.add("card-ios");
          ionCard.classList.add("card-md");
          ionCardHeader.classList.add("card-header");
          ionCardHeader.classList.add("card-header-ios");
          ionCardHeader.classList.add("card-header-md");
          ionCardContent.classList.add("card-content");
          ionCardContent.classList.add("card-content-ios");
          ionCardContent.classList.add("card-content-md");

          feedingTime.setAttribute("id", "feedingtime09");
          feedingTime.appendChild(clock9);
          feedingTime.appendChild(ionCard);
          clock9.appendChild(text);

          ionCard.appendChild(ionCardHeader);
          ionCard.appendChild(divider);
          ionCard.appendChild(ionCardContent);
          ionCardHeader.appendChild(image);
          ionCardHeader.appendChild(ptag);
          ionCardContent.appendChild(viewmap);
          ionCardContent.appendChild(remove);

          this.reminderContent.appendChild(feedingTime);

          this.elementRef.nativeElement.querySelector("#remover1").addEventListener(
            'click', this.onRemoveReminder(this.activitesData[0].animals[0].id)
          );

          this.remind1Text.style.color = "#ccc";
          this.remind1Text.innerHTML = "Added to Reminder";
        }
        break;
    }
  }

  onRemoveReminder(id: string) {
    console.log(id);
    // switch(id) {
    //   case "feed1":
    //     if (this.reminderContent.childNodes[0]) {

    //     } else {
    //       var elementToDelete = document.getElementById("feedingtime09");
    //       elementToDelete.parentNode.removeChild(elementToDelete);

    //       this.remind1Text.style.color = "orangered";
    //       this.remind1Text.innerHTML = "Remind Me";
    //       this.elementRef.nativeElement.querySelector("#remind1").addEventListener(
    //         'click', this.onRemindTap("feed1")
    //       );
    //     }
    // }
  }

  onRemoveRemind1Tap() {
    
    this.addReminder1 = false;
  }

  onRemindMe1Tap() {
    if (this.addReminder1) {

    } else {
      /* create feeding time bar */
      var feedingTime = document.createElement("div");
      var clock9 = document.createElement("div");
      var text = document.createElement("span");

      /* initiating the element */
      var ionCard = document.createElement("ion-card");
      var ionCardHeader = document.createElement("ion-card-header");
      var image = document.createElement("img");
      var ptag = document.createElement("p");
      var divider = document.createElement("div");
      var ionCardContent = document.createElement("ion-card-content");
      var viewmap = document.createElement("h1");
      var remove = document.createElement("h1");

      /* initiating the element (ioncard 2) */
      var ionCard2 = document.createElement("ion-card");
      var ionCardHeader2 = document.createElement("ion-card-header");
      var image2 = document.createElement("img");
      var ptag2 = document.createElement("p");
      var divider2 = document.createElement("div");
      var ionCardContent2 = document.createElement("ion-card-content");
      var viewmap2 = document.createElement("h1");
      var remove2 = document.createElement("h1");

      /* ion-card-header value */
      image.src = "assets/imgs/icon/icon_11004.png";
      ptag.innerHTML = "Feeding the Gorilla";

      /* ion-card-header2 value */
      image2.src = "assets/imgs/icon/icon_11004.png";
      ptag2.innerHTML = "Feeding the Gorilla";

      /* content attribute */
      divider.classList.add("card-divider");
      viewmap.classList.add("view-map");
      remove.classList.add("remove");
      viewmap.innerHTML = "View Map";
      remove.innerHTML = "Remove from Reminder";
      remove.setAttribute("id", "remover1");

      /* content attribute 2 */
      divider2.classList.add("card-divider");
      viewmap2.classList.add("view-map");
      remove2.classList.add("remove");
      viewmap2.innerHTML = "View Map";
      remove2.innerHTML = "Remove from Reminder";
      remove2.setAttribute("id", "remover2");

      clock9.classList.add("feeding-time-bar");
      text.innerHTML = "09:00";

      /* ionic attribute */
      ionCard.classList.add("card");
      ionCard.classList.add("card-ios");
      ionCard.classList.add("card-md");
      ionCardHeader.classList.add("card-header");
      ionCardHeader.classList.add("card-header-ios");
      ionCardHeader.classList.add("card-header-md");
      ionCardContent.classList.add("card-content");
      ionCardContent.classList.add("card-content-ios");
      ionCardContent.classList.add("card-content-md");

      /* ionic attribute */
      ionCard2.classList.add("card");
      ionCard2.classList.add("card-ios");
      ionCard2.classList.add("card-md");
      ionCardHeader2.classList.add("card-header");
      ionCardHeader2.classList.add("card-header-ios");
      ionCardHeader2.classList.add("card-header-md");
      ionCardContent2.classList.add("card-content");
      ionCardContent2.classList.add("card-content-ios");
      ionCardContent2.classList.add("card-content-md");

      /* put all together */
      feedingTime.setAttribute("id", "feedingtime9");
      feedingTime.appendChild(clock9);
      feedingTime.appendChild(ionCard);
      feedingTime.appendChild(ionCard2);
      clock9.appendChild(text);

      ionCard.appendChild(ionCardHeader);
      ionCard.appendChild(divider);
      ionCard.appendChild(ionCardContent);
      ionCardHeader.appendChild(image);
      ionCardHeader.appendChild(ptag);
      ionCardContent.appendChild(viewmap);
      ionCardContent.appendChild(remove);

      ionCard2.appendChild(ionCardHeader2);
      ionCard2.appendChild(divider2);
      ionCard2.appendChild(ionCardContent2);
      ionCardHeader2.appendChild(image2);
      ionCardHeader2.appendChild(ptag2);
      ionCardContent2.appendChild(viewmap2);
      ionCardContent2.appendChild(remove2);

      this.reminderContent.appendChild(feedingTime);

      this.elementRef.nativeElement.querySelector("#remover1").addEventListener(
        'click', this.onRemoveRemind1Tap.bind(this)
      );

      this.elementRef.nativeElement.querySelector("#remover2").addEventListener(
        'click', this.onRemoveRemind2Tap.bind(this)
      );

      this.remind1Text.style.color = "#ccc";
      this.remind1Text.innerHTML = "Added to Reminder";

      this.addReminder1 = true;
    }
  }

  onRemoveRemind2Tap() {
    var elementToDelete = document.getElementById("feedingtime9");
    elementToDelete.parentNode.removeChild(elementToDelete);

    this.remind1Text.style.color = "orangered";
    this.remind1Text.innerHTML = "Remind Me";
    this.elementRef.nativeElement.querySelector("#remind2").addEventListener(
      'click', this.onRemindMe1Tap.bind(this)
    );
    this.addReminder1 = false;
  }

  onRemindMe2Tap() {
    if (!this.addReminder2) {

    }
  }

  onRemindMe33Tap() {
    if (this.addReminder2) {

    } else {
      var feedingTime = document.createElement("div");
      var clock12 = document.createElement("div");
      var text = document.createElement("span");

      var ionCard = document.createElement("ion-card");
      var ionCardHeader = document.createElement("ion-card-header");
      var image = document.createElement("img");
      var ptag = document.createElement("p");
      var divider = document.createElement("div");
      var ionCardContent = document.createElement("ion-card-content");
      var viewmap = document.createElement("h1");
      var remove = document.createElement("h1");

      image.src = "assets/imgs/icon/icon_11004.png";
      ptag.innerHTML = "Feeding the Gorilla";

      clock12.classList.add("feeding-time-bar");
      text.innerHTML = "12:00";

      divider.classList.add("card-divider");
      viewmap.classList.add("view-map");
      remove.classList.add("remove");
      viewmap.innerHTML = "View Map";
      remove.innerHTML = "Remove from Reminder";
      remove.setAttribute("id", "remover1");

      ionCard.classList.add("card");
      ionCard.classList.add("card-ios");
      ionCard.classList.add("card-md");
      ionCardHeader.classList.add("card-header");
      ionCardHeader.classList.add("card-header-ios");
      ionCardHeader.classList.add("card-header-md");
      ionCardContent.classList.add("card-content");
      ionCardContent.classList.add("card-content-ios");
      ionCardContent.classList.add("card-content-md");

      feedingTime.setAttribute("id", "feedingtime12");
      feedingTime.appendChild(clock12);
      feedingTime.appendChild(ionCard);
      clock12.appendChild(text);

      ionCard.appendChild(ionCardHeader);
      ionCard.appendChild(divider);
      ionCard.appendChild(ionCardContent);
      ionCardHeader.appendChild(image);
      ionCardHeader.appendChild(ptag);
      ionCardContent.appendChild(viewmap);
      ionCardContent.appendChild(remove);

      this.reminderContent.appendChild(feedingTime);

      this.elementRef.nativeElement.querySelector("#remover3").addEventListener(
        'click', this.onRemoveRemind2Tap.bind(this)
      );

      this.remind2Text.style.color = "#ccc";
      this.remind2Text.innerHTML = "Added to Reminder";

      this.addReminder2 = true;
    }
  }

  onRemindMe3Tap() {
    this.remind3Text.style.color = "#ccc";
    this.remind3Text.innerHTML = "Added to Reminder";
  }

  onRemindMe4Tap() {
    this.remind4Text.style.color = "#ccc";
    this.remind4Text.innerHTML = "Added to Reminder";
  }

  onRemindMe5Tap() {
    this.remind5Text.style.color = "#ccc";
    this.remind5Text.innerHTML = "Added to Reminder";
  }

}
