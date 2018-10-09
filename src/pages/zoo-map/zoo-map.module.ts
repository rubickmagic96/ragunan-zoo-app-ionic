import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ZooMapPage } from './zoo-map';

@NgModule({
  declarations: [
    ZooMapPage,
  ],
  imports: [
    IonicPageModule.forChild(ZooMapPage),
  ],
})
export class ZooMapPageModule {}
