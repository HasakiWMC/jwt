import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThiefFakeKeyPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-fake-key',
  templateUrl: 'thief-fake-key.html',
})
export class ThiefFakeKeyPage {
  thiefWarningFakeKeyItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thiefWarningFakeKeyItems = navParams.get('thiefFakeKey');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefFakeKeyPage');
  }

}
