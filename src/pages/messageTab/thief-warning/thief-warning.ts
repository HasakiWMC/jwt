import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {ThiefWarningHistoryPage} from '../thief-warning-history/thief-warning-history';
import {ThiefFakeKeyPage} from '../thief-fake-key/thief-fake-key';
import {ThiefDemolitionLockCorePage} from '../thief-demolition-lock-core/thief-demolition-lock-core'
import {ThiefPryDoorPage} from '../thief-pry-door/thief-pry-door'
import {Api} from '../../../providers/api/api';
import {WelcomePage} from "../../loginTab/welcome/welcome";

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
  thiefWarning: any[];
  thiefFakeKey: any[];
  thiefDemolitionLockCore: any[];
  thiefPryDoor: any[];
  thiefFakeKey_display: { hasSignal: string, time: string } = {
    hasSignal: '',
    time: ''
  };
  thiefDemolitionLockCore_display: { hasSignal: string, time: string } = {
    hasSignal: '',
    time: ''
  };
  thiefPryDoor_display: { hasSignal: string, time: string } = {
    hasSignal: '',
    time: ''
  };
  profilePic: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
    this.profilePic = "assets/img/warn.png";

    this.getWarningLog();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefWarningPage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter ThiefWarningPage');
    this.thiefFakeKey_display.hasSignal = localStorage.getItem("signalThiefWarningLog_1");
    this.thiefDemolitionLockCore_display.hasSignal = localStorage.getItem("signalThiefWarningLog_2");
    this.thiefPryDoor_display.hasSignal = localStorage.getItem("signalThiefWarningLog_3");
  }

  queryThiefWarningHistory() {
    this.navCtrl.push(ThiefWarningHistoryPage, {
      thiefWarning: this.thiefWarning
    });
  }

  openItem(thiefWarningId: number) {
    localStorage.setItem("signalThiefWarningLog_" + thiefWarningId, "false");
    if (thiefWarningId == 1) {
      this.navCtrl.push(ThiefFakeKeyPage, {
        thiefFakeKey: this.thiefFakeKey
      });
    } else if (thiefWarningId == 2) {
      this.navCtrl.push(ThiefDemolitionLockCorePage, {
        thiefDemolitionLockCore: this.thiefDemolitionLockCore
      });
    } else if (thiefWarningId == 3) {
      this.navCtrl.push(ThiefPryDoorPage, {
        thiefPryDoor: this.thiefPryDoor
      });
    }
  }

  getWarningLog() {
    let seq = this.api.authGet('main/getWarningLog').share();

    seq.subscribe((resp: any) => {
      // If the API returned a successful response, mark the user as logged in
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        this.convert2ThiefWarning(res['data']);
        console.log(res['data']);
      } else {
      }
    }, err => {
      console.error('ERROR', err);
      if (err['status'] == 401) {
        let modal = this.modalCtrl.create(WelcomePage);
        modal.present();
        let toast = this.toastCtrl.create({
          message: '登录态无效，请重新登录',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      }
    });
    return seq;
  }

  convert2ThiefWarning(res: Array<any>) {
    this.thiefWarning = [];
    this.thiefFakeKey = [];
    this.thiefDemolitionLockCore = [];
    this.thiefPryDoor = [];
    for (let i = 0; i < res.length; i++) {
      let item = {};
      let warning_log = res[i]['warning_log'];
      item['thiefWarningId'] = warning_log;
      item['time'] = res[i]['create_time'];
      item['hasSignal'] = localStorage.getItem("signalThiefWarningLog_" + warning_log);
      switch (warning_log) {
        case 1:
          this.thiefFakeKey.push(item);
          break;
        case 2:
          this.thiefDemolitionLockCore.push(item);
          break;
        case 3:
          this.thiefPryDoor.push(item);
          break;
      }
      this.thiefWarning.push(item);
    }
    if (this.thiefFakeKey.length != 0) {
      this.thiefFakeKey_display = this.thiefFakeKey[this.thiefFakeKey.length - 1];
    }
    if (this.thiefDemolitionLockCore.length != 0) {
      this.thiefDemolitionLockCore_display = this.thiefDemolitionLockCore[this.thiefDemolitionLockCore.length - 1];
    }
    if (this.thiefPryDoor.length != 0) {
      this.thiefPryDoor_display = this.thiefPryDoor[this.thiefPryDoor.length - 1];
    }
  }

}
