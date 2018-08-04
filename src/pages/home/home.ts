import { Component, ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Slides } from 'ionic-angular';
import { RandoliPage } from '../randoli/randoli'
@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  @ViewChild(Slides) slides: Slides;
  
	images = ['01.jpg','04.jpg','05.jpg'] ;
  constructor(public navCtrl: NavController) {
    
  }
  ngAfterViewInit() {
    this.slides.startAutoplay();
  }

  btnClick(){
    this.navCtrl.push(RandoliPage)
  }
}
