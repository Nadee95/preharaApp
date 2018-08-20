import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
import { NavParams } from 'ionic-angular/navigation/nav-params';
/**
 * Generated class for the MapLayerComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'map-layer',
  templateUrl: 'map-layer.html'
})
export class MapLayerComponent {
  private todo: FormGroup;
  private state: any;
  constructor(private formBuilder: FormBuilder, public viewCtrl: ViewController, public navParams: NavParams) {
    this.state=this.navParams.get('data');
    this.todo = this.formBuilder.group({
    route: [this.state.route, Validators.required],
    poi:[this.state.poi]
});

  }
  logForm() {
  //  console.log(this.todo.value)
  }
  submit() {
   // this.viewCtrl.dismiss(this.todo.value);
  }
  dismiss() {
    this.viewCtrl.dismiss(this.todo.value);
  }
}
