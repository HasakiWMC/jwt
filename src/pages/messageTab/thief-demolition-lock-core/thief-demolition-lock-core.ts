import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ThiefDemolitionLockCorePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-demolition-lock-core',
  templateUrl: 'thief-demolition-lock-core.html',
})
export class ThiefDemolitionLockCorePage {
  thiefWarningDemolitionLockCoreItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thiefWarningDemolitionLockCoreItems = navParams.get('thiefDemolitionLockCore');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefDemolitionLockCorePage');
  }

}
