import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { RandoliPage } from './randoli';

@NgModule({
  declarations: [
    RandoliPage,
  ],
  imports: [
    IonicPageModule.forChild(RandoliPage),
  ],
})
export class RandoliPageModule {}
