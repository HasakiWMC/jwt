import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the PersonInOrOutDoorHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-in-or-out-door-history',
  templateUrl: 'person-in-or-out-door-history.html',
})
export class PersonInOrOutDoorHistoryPage {
  personInOrOutDoorItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.personInOrOutDoorItems = [
      {
        "thiefWarningId": 1,
        "name": "有人出门",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 2,
        "name": "有人进门",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 1,
        "name": "有人出门",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 2,
        "name": "有人进门",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 1,
        "name": "有人出门",
        "time": "2017年10月31日 下午10:47"
      },
      {
        "thiefWarningId": 2,
        "name": "有人进门",
        "time": "2017年10月31日 下午10:47"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonInOrOutDoorHistoryPage');
  }

}
