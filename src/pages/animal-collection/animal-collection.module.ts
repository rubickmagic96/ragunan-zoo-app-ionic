import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AnimalCollectionPage } from './animal-collection';

@NgModule({
  declarations: [
    AnimalCollectionPage,
  ],
  imports: [
    IonicPageModule.forChild(AnimalCollectionPage),
  ],
})
export class AnimalCollectionPageModule {}
