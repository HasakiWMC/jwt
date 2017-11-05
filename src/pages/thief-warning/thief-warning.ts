import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThiefWarningHistoryPage } from '../thief-warning-history/thief-warning-history';
import { ThiefFakeKeyPage } from '../thief-fake-key/thief-fake-key';
import { ThiefDemolitionLockCorePage } from '../thief-demolition-lock-core/thief-demolition-lock-core'
import { ThiefPryDoorPage } from '../thief-pry-door/thief-pry-door'

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
    if (thiefWarningId == 1) {
      this.navCtrl.push(ThiefFakeKeyPage);
    } else if (thiefWarningId == 2) {
      this.navCtrl.push(ThiefDemolitionLockCorePage);
    } else if (thiefWarningId == 3) {
      this.navCtrl.push(ThiefPryDoorPage);
    }
  }
}
