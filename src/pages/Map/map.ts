import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';

declare var google;


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'
})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  kmlLayer: any;

  constructor(public navCtrl: NavController) {

  }
  ionViewDidLoad(){
    this.initMap();
  }



  initMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 7.2960452, lng: 80.6360764}
    });
    
  }

  btn01Click(){
   this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day01.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn02Click(){
  this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day02.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn03Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day03.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn04Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day04.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn05Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day05.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn06Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day06.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn07Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day07.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn08Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day08.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn09Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day09.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn10Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day10.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

  btn11Click(){
    this.initMap();
    this.kmlLayer = new google.maps.KmlLayer("https://perahara.000webhostapp.com/Day11.kml", {
      suppressInfoWindows: false,
      preserveViewport: false,
    });
    console.log(this.kmlLayer);
    this.kmlLayer.setMap(this.map);

  }

}
