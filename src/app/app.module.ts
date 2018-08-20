import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/Map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { HistoryPage} from '../pages/history/history';

import { RandoliPageModule} from '../pages/randoli/randoli.module';
import { ViewspotsPageModule} from '../pages/viewspots/viewspots.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { Geolocation } from '@ionic-native/geolocation';

import { MapLayerComponent } from '../components/map-layer/map-layer';
import { HttpModule } from '@angular/http';
import { SubContactPage } from '../pages/sub-contact/sub-contact'
@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    HistoryPage,
    SubContactPage,
    MapLayerComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RandoliPageModule,
    ViewspotsPageModule,
    HttpModule,
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    SubContactPage,
    HistoryPage,
    MapLayerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    Geolocation,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
