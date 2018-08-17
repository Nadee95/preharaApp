import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MapLayerComponent } from '../../components/map-layer/map-layer';
declare var google;
var  day='Map loaded..';


@Component({
  selector: 'page-map',
  templateUrl: 'map.html'

})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  d1 = new google.maps.Data();
  d2 = new google.maps.Data();
  d3 = new google.maps.Data();
  d4 = new google.maps.Data();
  d5 = new google.maps.Data();
  d6= new google.maps.Data();
  d7 = new google.maps.Data();
  d8 = new google.maps.Data();
  d9 = new google.maps.Data();
  d10 = new google.maps.Data();
  d11 = new google.maps.Data();
  currentMap = this.d1;

//public navCtrl: NavController
  constructor(public navCtrl:NavController,private toastCtrl: ToastController,public popoverCtrl: PopoverController) {

  }
  ionViewDidLoad(){
    this.loadGeoJson();
    this.initMap();

  }
  
  loadGeoJson(){
    this.d1.loadGeoJson('/assets/geo/d1.geojson');
    this.d2.loadGeoJson('/assets/geo/d2.json');
    this.d3.loadGeoJson('/assets/geo/d3.json');
    this.d4.loadGeoJson('/assets/geo/d4.json');
  }


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

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MapLayerComponent,{},{enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(datax =>{
      console.log(datax);
      if (datax.route == 'd1'){
        this.currentMap.setMap(null);
        this.d1.setMap(this.map);
        this.currentMap=this.d1;
      }else if(datax.route == 'd2'){
        this.currentMap.setMap(null);
        this.d2.setMap(this.map);
        this.currentMap.setMap(this.d2);
        
      }
    })
  }


}
