import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RandoliPage } from '../randoli/randoli'
import { HistoryPage } from '../history/history'
import { ViewspotsPage } from '../viewspots/viewspots';
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  
	images = ['01.jpg','14.jpg','15.png','17.png'] ;
  constructor(public navCtrl: NavController) {
    
  }
  ngAfterViewInit() {

  }

  btnClick(){
    this.navCtrl.push(RandoliPage)
  }
  btnClick2(){
    this.navCtrl.push(HistoryPage)
  }
  viewspots(){
    this.navCtrl.push(ViewspotsPage)
  }



}
