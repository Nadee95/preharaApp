import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';

declare var google;
var  day='Map loaded..';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'

})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  kmlLayer: any;

//public navCtrl: NavController
  constructor(public navCtrl:NavController,private toastCtrl: ToastController) {

  }
  ionViewDidLoad(){
    this.initMap();

  }
  
  private buttonColor: string = "dark";//for change button color

  initMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 7.2960452, lng: 80.6360764}
    });
    
  }



  presentToast() {
    const toast = this.toastCtrl.create({
      message: day,
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  btn01Click(){
    day='Day 1  Map loaded';
    this.presentToast();
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day01.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn02Click(){
  
  day='Day 2  Map loaded';
  this.presentToast();

  this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day02.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn03Click(){
    
    day='Day 3  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day03.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn04Click(){

    day='Day 4  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day04.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn05Click(){

    day='Day 5  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day05.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn06Click(){


    day='Day 6  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day06.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn07Click(){

    day='Day 7  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day07.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn08Click(){

    day='Day 8  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day08.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn09Click(){

    day='Day 9  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day09.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn10Click(){

    day='Day 10  Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day10.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn11Click(){

    day='Day 11 Map loaded';
    this.presentToast();

    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day11.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  


}
