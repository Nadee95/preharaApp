import { Component, ViewChild, ElementRef } from '@angular/core';
import { NavController, AlertController, LoadingController } from 'ionic-angular';
import { MapLayerComponent } from '../../components/map-layer/map-layer';
import { ModalController } from 'ionic-angular';
import { Geolocation } from '@ionic-native/geolocation';

declare var google;



@Component({
  selector: 'page-map',
  templateUrl: 'map.html'

})

export class MapPage {
  @ViewChild('map') mapElement: ElementRef;
  map: any;
  coordArea = new google.maps.Polygon({
    paths: [
      { lat: 80.6335115, lng: 7.2984923 },
      { lat: 80.6336188, lng: 7.2908513 },
      { lat: 80.6422877, lng: 7.2908088 },
      { lat: 80.6420732, lng: 7.2985349 },
      { lat: 80.6335115, lng: 7.2984923, }
    ]
  });

  currentMap: any;
  currentState: any = {
    route:"Day05.kmz",
    poi: "true"
  }

  //public navCtrl: NavController
  constructor(public navCtrl: NavController,public loadingCtrl: LoadingController, private alertCtrl: AlertController, public modalCtrl: ModalController, public geolocation: Geolocation) {

  }
  ionViewDidLoad() {
    // this.loadGeoJson();
    this.initMap();


  }

  initMap() {
    this.map = new google.maps.Map(this.mapElement.nativeElement, {
      zoom: 16,
      center: { lat: 7.2960452, lng: 80.6360764 }
    });

    this.currentMap = new google.maps.KmlLayer("http://perahara2018.000webhostapp.com/Day05.kmz", {
      preserveViewport: false,
      map: this.map
    });

    this.currentMap.addListener('click', function (event) {
      var content = event.featureData.infoWindowHtml;
      var testimonial = document.getElementById('capture');
      testimonial.innerHTML = content;
    });
  

  }
  getPosition(){
    let loading = this.loadingCtrl.create({
      content: 'Getting Your Position'
    });
    loading.present();

     this.geolocation.getCurrentPosition().then((position) => {
      let latLng = new google.maps.LatLng(position.coords.latitude, position.coords.longitude)
      let res = google.maps.geometry.poly.containsLocation(latLng, this.coordArea)
      if (res) {
        loading.dismiss();
        let marker = new google.maps.Marker({
          map: this.map,
          animation: google.maps.Animation.DROP,
          position: latLng
        });
      } else {
        loading.dismiss();
        this.presentLocationAlert();
      }

    });
  }
  presentLocationAlert() {
    let alert = this.alertCtrl.create({
      title: 'Too Far Away',
      subTitle: 'your current location is too far away from perahera area',
      buttons: ['Dismiss']
    });
    alert.present();
  }
  
  loadMap(route) {
    this.currentMap.setOptions({ url: "http://perahara2018.000webhostapp.com/" + route });
  }
  presentModal() {
    const modal = this.modalCtrl.create(MapLayerComponent, { data: this.currentState }, { enableBackdropDismiss: false });
    modal.present();

    modal.onDidDismiss(datax => {
      console.log(this.currentState);
      if (this.currentState.route != datax.route) {
        this.loadMap(datax.route);
      }
      this.currentState = datax;
      if (!datax.poi) {
        this.map.setOptions({
          styles: [
            {
              featureType: 'poi.business',
              stylers: [{ visibility: 'off' }]
            },
            {
              featureType: 'transit',
              elementType: 'labels.icon',
              stylers: [{ visibility: 'off' }]
            }
          ]
        });

      } else {
        this.map.setOptions({ styles: null });
      }
    })
  }



}
