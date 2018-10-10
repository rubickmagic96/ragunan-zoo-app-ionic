import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { VisitorInfoPage } from './visitor-info';

@NgModule({
  declarations: [
    VisitorInfoPage,
  ],
  imports: [
    IonicPageModule.forChild(VisitorInfoPage),
  ],
})
export class VisitorInfoPageModule {}
