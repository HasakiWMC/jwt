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
  beepItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.beepItems = [
      {
        "beepId": 1,
        "name": "煤气关好了吗？",
        "hasSignal": true
      },
      {
        "beepId": 2,
        "name": "保健药品带了吗？",
        "hasSignal": true
      },
      {
        "beepId": 3,
        "name": "请带好证件",
        "hasSignal": false
      },
      {
        "beepId": 4,
        "name": "请关好窗户",
        "hasSignal": false
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalBeepSettingsPage');
  }

}
