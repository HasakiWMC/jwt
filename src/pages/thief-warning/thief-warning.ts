import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ThiefWarningHistoryPage } from '../thief-warning-history/thief-warning-history';
import { ThiefFakeKeyPage } from '../thief-fake-key/thief-fake-key';
import { ThiefDemolitionLockCorePage } from '../thief-demolition-lock-core/thief-demolition-lock-core'
import { ThiefPryDoorPage } from '../thief-pry-door/thief-pry-door'
import { Api } from '../../providers/api/api';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.profilePic = "assets/img/warn.png";

    this.getWarningLog();

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

  getWarningLog() {
    let seq = this.api.authGet('main/getWarningLog').share();

    seq.subscribe((resp: any) => {
      // If the API returned a successful response, mark the user as logged in
      var res = resp.json();
      console.log(res)
      if (res['status'] == true) {
        this.convert2ThiefWarning(res['data']);
        console.log(res['data'])
        console.log(this.thiefWarningItems)
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  convert2ThiefWarning(res: Array<any>) {
    this.thiefWarningItems = [];
    for (var i = 0; i < res.length && i < 3; i++) {
      var item = {};
      var warning_log = res[i]['warning_log']
      item['thiefWarningId'] = warning_log
      item['time'] = res[i]['create_time']
      item['hasSignal'] = true
      switch (warning_log) {
        case 1:
          item['name'] = "盗贼假钥匙开锁报警";
          break;
        case 2:
          item['name'] = "盗贼拆锁芯报警";
          break;
        case 3:
          item['name'] = "盗贼撬门报警";
          break;
      }
      this.thiefWarningItems.push(item)

    }
  }
}
