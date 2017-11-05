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
  keyForgetWarningItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.keyForgetWarningItems = [
      {
        "thiefWarningId": 1,
        "name": "盗贼假钥匙开锁报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 2,
        "name": "盗贼拆锁芯报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 3,
        "name": "盗贼撬门报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 4,
        "name": "盗贼假钥匙开锁报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 5,
        "name": "盗贼拆锁芯报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 6,
        "name": "盗贼撬门报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 7,
        "name": "盗贼假钥匙开锁报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 8,
        "name": "盗贼拆锁芯报警",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 9,
        "name": "盗贼撬门报警",
        "time": "2017年10月31日 下午10:47"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeyForgetWarningHistoryPage');
  }

}
