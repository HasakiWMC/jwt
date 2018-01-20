import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {KeyForgetWarningHistoryPage} from '../key-forget-warning-history/key-forget-warning-history';
import {Api} from '../../providers/api/api';

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
  lastForgetTime: string;
  keyForgetList: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams, public api: Api) {
    this.getKeyForgetLog();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad KeyForgetWarningPage');
  }

  queryKeyForgetWarningHistory() {
    this.navCtrl.push(KeyForgetWarningHistoryPage, {
      keyForgetList: this.keyForgetList
    });
  }

  getKeyForgetLog() {
    let seq = this.api.authGet('main/forgetKey').share();

    seq.subscribe((resp: any) => {
      // If the API returned a successful response, mark the user as logged in
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        this.convert2KeyForgetWarning(res['data']);
        console.log(res['data']);
        console.log(this.keyForgetList);
        console.log(this.lastForgetTime);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  convert2KeyForgetWarning(res: Array<any>) {
    this.lastForgetTime = "";
    this.keyForgetList = [];
    for (let i = 0; i < res.length; i++) {
      let item = {};
      item['time'] = res[i]['create_time'];
      this.keyForgetList.push(item);
    }
    if (this.keyForgetList.length > 0) {
      this.lastForgetTime = this.keyForgetList[this.keyForgetList.length - 1]["time"];
    }
  }

}
