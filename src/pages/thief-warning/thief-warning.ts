import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThiefWarningHistoryPage } from '../thief-warning-history/thief-warning-history';

/**
 * Generated class for the ThiefWarningPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-warning',
  templateUrl: 'thief-warning.html',
})
export class ThiefWarningPage {
  thiefWarningItems: any[];
  profilePic: any

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.profilePic = "assets/img/warn.png";
    this.thiefWarningItems = [
      {
        "thiefWarningId": 1,
        "name": "盗贼假钥匙开锁报警",
        "time": "2017年10月31日 下午10:47",
        "hasSignal": true
      },
      {
        "thiefWarningId": 2,
        "name": "盗贼拆锁芯报警",
        "time": "2017年10月31日 下午10:47",
        "hasSignal": true
      },
      {
        "thiefWarningId": 3,
        "name": "盗贼撬门报警",
        "time": "2017年10月31日 下午10:47",
        "hasSignal": false
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefWarningPage');
  }


  queryThiefWarningHistory() {
    this.navCtrl.push(ThiefWarningHistoryPage);
  }

  openItem(thiefWarningId: number) {

  }
}
