import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the AdditionalBeepSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-beep-settings',
  templateUrl: 'additional-beep-settings.html',
})
export class AdditionalBeepSettingsPage {
  beepItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.beepItem = 3
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalBeepSettingsPage');
  }

  save() {
    console.log(this.beepItem);
  }
}
