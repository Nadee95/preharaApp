import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import { ToastController } from 'ionic-angular';
import { PopoverController } from 'ionic-angular';
import { MapLayerComponent } from '../../components/map-layer/map-layer';
import { ModalController } from 'ionic-angular';
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
  currentMap: any;
  currentState: any={
    //route:"d1",
    poi:"true"
  }

//public navCtrl: NavController
  constructor(public navCtrl:NavController,private toastCtrl: ToastController,public popoverCtrl: PopoverController, public modalCtrl: ModalController) {

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

    this.currentMap = new google.maps.KmlLayer("http://perahara2018.000webhostapp.com/Day02.kmz", {
      preserveViewport: false,
      map: this.map
    });
    
    this.currentMap.addListener('click', function(event) {
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
  loadMap(route){
    this.currentMap.setOptions({url:"http://perahara2018.000webhostapp.com/"+route});
  }
  presentModal() {
    const modal = this.modalCtrl.create(MapLayerComponent,{data:this.currentState},{enableBackdropDismiss:false});
    modal.present();

    modal.onDidDismiss(datax =>{
      console.log(this.currentState);
      if(this.currentState.route != datax.route){
        this.loadMap(datax.route);
      }
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
    })
  }



}
