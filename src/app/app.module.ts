import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';

import { AboutPage } from '../pages/about/about';
import { MapPage } from '../pages/Map/map';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';

import { RandoliPageModule} from '../pages/randoli/randoli.module';
import { ViewspotsPageModule} from '../pages/viewspots/viewspots.module';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { MapLayerComponent } from '../components/map-layer/map-layer';

@NgModule({
  declarations: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    MapLayerComponent

  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp),
    RandoliPageModule,
    ViewspotsPageModule
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    AboutPage,
    MapPage,
    HomePage,
    TabsPage,
    MapLayerComponent
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler}
  ]
})
export class AppModule {}
