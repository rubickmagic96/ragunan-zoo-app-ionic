import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { BadgeCollectionPage } from './badge-collection';

@NgModule({
  declarations: [
    BadgeCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(BadgeCollectionPage),
  ],
})
export class BadgeCollectionPageModule {}
