import { Component } from '@angular/core';

import { AboutPage } from '../about/about';
import { MapPage } from '../Map/map';
import { HomePage } from '../home/home';

@Component({
  templateUrl: 'tabs.html'
})
export class TabsPage {

  tab1Root = HomePage;
  tab2Root = MapPage;
  tab3Root = AboutPage;
 

  constructor() {

  }
}
