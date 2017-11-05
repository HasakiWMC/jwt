import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { KeyForgetWarningHistoryPage } from '../key-forget-warning-history/key-forget-warning-history';

/**
 * Generated class for the KeyForgetWarningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-key-forget-warning',
  templateUrl: 'key-forget-warning.html',
})
export class KeyForgetWarningPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeyForgetWarningPage');
  }

  queryKeyForgetWarningHistory() {
    this.navCtrl.push(KeyForgetWarningHistoryPage);
  }

}
