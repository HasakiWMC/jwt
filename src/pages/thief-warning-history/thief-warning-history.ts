import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ThiefWarningHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-warning-history',
  templateUrl: 'thief-warning-history.html',
})
export class ThiefWarningHistoryPage {
  thiefWarningHistoryItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thiefWarningHistoryItems = navParams.get('thiefWarning');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefWarningHistoryPage');
  }

}
