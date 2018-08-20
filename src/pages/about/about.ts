import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { Http } from '@angular/http';
import { SubContactPage } from '../sub-contact/sub-contact';

@Component({
  selector: 'page-about',
  templateUrl: 'about.html'
})
export class AboutPage {
contacts:any;
  	constructor(public navCtrl: NavController, public http: Http) {
  		
		var  url='./assets/2DContactInfo.json';
		this.http.get(url).subscribe(data => {
			this.contacts = data.json();
            console.log(this.contacts);
        });
  	}

	  pushContacts(contacts){
		  console.log(contacts)
		this.navCtrl.push(SubContactPage,{data:contacts});
	  }

}

