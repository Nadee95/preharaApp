import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MapLayerComponent } from '../../components/map-layer/map-layer';

declare var google;



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
  currentState: any={
    //route:"d1",
    poi:"true"
  }

//public navCtrl: NavController
  constructor(public navCtrl:NavController,private toastCtrl: ToastController,public popoverCtrl: PopoverController) {

  }
  ionViewDidLoad(){
   // this.loadGeoJson();
    this.initMap();
   

  }
  
  loadGeoJson(){
    this.d1.loadGeoJson('/assets/geo/d1.geojson');
    this.d2.loadGeoJson('/assets/geo/day2.geojson');
    this.d3.loadGeoJson('/assets/geo/d3.json');
    this.d4.loadGeoJson('/assets/geo/d4.json');
  }


  initMap(){
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: {lat: 7.2960452, lng: 80.6360764}
    });

    var kmlLayer = new google.maps.KmlLayer(" https://sites.google.com/site/peraharagis/Day02.kmz", {
      preserveViewport: false,
      map: this.map
    });
    kmlLayer.addListener('click', function(event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
  
}

  presentToast() {
    const toast = this.toastCtrl.create({
      message: "yo",
      duration: 3000,
      position: 'bottom'
    });
    toast.present();
  }

  presentPopover(myEvent) {
    let popover = this.popoverCtrl.create(MapLayerComponent,{data:this.currentState},{enableBackdropDismiss:false});
    popover.present({
      ev: myEvent
    });

    popover.onDidDismiss(datax =>{
      this.currentState = datax;
      if(!datax.poi){
        
         this.map.setOptions({styles: [
          {
            featureType: 'poi.business',
            stylers: [{visibility: 'off'}]
          },
          {
            featureType: 'transit',
            elementType: 'labels.icon',
            stylers: [{visibility: 'off'}]
          }
        ]
      });
        
      }else{
        this.map.setOptions({styles: null});
      }
     /* if (datax.route == 'd1'){
        this.currentMap.setMap(null);
        this.d1.setMap(this.map);
        this.currentMap=this.d1;
      }else if(datax.route == 'd2'){
        this.currentMap.setMap(null);
        this.d2.setMap(this.map);
        this.currentMap.setMap(this.d2);
        
      }*/
    })
  }


}
