import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the SubContactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */
interface Contact {
  organization: String,
  position:String,
  name:String,
  office:number,
  mobile:number
}
@Component({
  selector: 'page-sub-contact',
  templateUrl: 'sub-contact.html',
})
export class SubContactPage {
contacts: Contact;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.contacts=this.navParams.data.data;
  }

  ionViewDidLoad() {
    console.log(this.contacts[0].name)
  }
}
