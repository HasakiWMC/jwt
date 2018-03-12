import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from '../../../providers/api/api';
import {WelcomePage} from "../../loginTab/welcome/welcome";

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

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public api: Api, public modalCtrl: ModalController) {
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
          message: '保存成功，请将单片机开关打开即可生效',
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


}
