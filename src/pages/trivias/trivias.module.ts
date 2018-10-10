import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TriviasPage } from './trivias';

@NgModule({
  declarations: [
    TriviasPage,
  ],
  imports: [
    IonicPageModule.forChild(TriviasPage),
  ],
})
export class TriviasPageModule {}
