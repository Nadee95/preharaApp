import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {

  	constructor(public navCtrl: NavController) {
  		
  		
  	}



}

var cc=document.getElementById('contact-info');

function renderHtml() {
  		
  		var request = new XMLHttpRequest();
  		request.open('GET','2DContactInfo.json');
  		request.onload= function(){
  			var data= JSON.parse(request.responseText);
  			cc.insertAdjacentHTML('beforeend','abcd');
  		}
}