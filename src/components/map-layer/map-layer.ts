import { Component } from '@angular/core';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { ViewController } from 'ionic-angular/navigation/view-controller';
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

  constructor(private formBuilder: FormBuilder, public viewCtrl: ViewController) {
    this.todo = this.formBuilder.group({
      route: [this.d1, Validators.required]
    });

  }
  logForm() {
    console.log(this.todo.value.route)
  }
  submit() {
    this.viewCtrl.dismiss(this.todo.value);
  }

}
