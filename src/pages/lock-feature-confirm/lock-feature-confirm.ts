import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from '../../providers/api/api';

/**
 * Generated class for the LockFeatureConfirmPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-lock-feature-confirm',
  templateUrl: 'lock-feature-confirm.html',
})
export class LockFeatureConfirmPage {
  lockFeatureItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public api: Api) {
    if (localStorage.getItem('lockFeatureItem') == null) {
      this.lockFeatureItem = 1
    }
    else {
      this.lockFeatureItem = localStorage.getItem('lockFeatureItem')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LockFeatureConfirmPage');
  }

  save() {
    console.log(this.lockFeatureItem);
    this.setLockerFeature();
  }

  setLockerFeature() {
    let option = {
      "feature_id": this.lockFeatureItem
    };
    let seq = this.api.authPost('device/lockerFeatureConfirm', option).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        localStorage.setItem('lockFeatureItem', this.lockFeatureItem);
        let toast = this.toastCtrl.create({
          message: '保存成功',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          message: '保存失败',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }


}
