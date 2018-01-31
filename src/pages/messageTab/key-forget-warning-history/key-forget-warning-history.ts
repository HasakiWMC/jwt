import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the KeyForgetWarningHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-key-forget-warning-history',
  templateUrl: 'key-forget-warning-history.html',
})
export class KeyForgetWarningHistoryPage {
  keyForgetList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.keyForgetList = navParams.get('keyForgetList');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeyForgetWarningHistoryPage');
  }

}
