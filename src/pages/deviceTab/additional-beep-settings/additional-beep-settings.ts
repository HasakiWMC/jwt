import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from '../../../providers/api/api';
/**
 * Generated class for the AdditionalBeepSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-additional-beep-settings',
  templateUrl: 'additional-beep-settings.html',
})
export class AdditionalBeepSettingsPage {
  beepItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public api: Api) {
    if (localStorage.getItem('beepItem') == null) {
      this.beepItem = "0";
    } else {
      this.beepItem = localStorage.getItem('beepItem');
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AdditionalBeepSettingsPage');
  }

  save() {
    console.log(this.beepItem);
    this.setBeepItem();
  }

  setBeepItem() {
    let option = {
      "setting_id": this.beepItem
    };
    let seq = this.api.authPost('device/additionalBeepSettings', option).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        localStorage.setItem('beepItem', this.beepItem);
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
    });
    return seq;
  }

  cancel() {
    this.beepItem = "0";
    let option = {
      "setting_id": '0'
    };
    let seq = this.api.authPost('device/additionalBeepSettings', option).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        localStorage.setItem('beepItem', '0');
        let toast = this.toastCtrl.create({
          message: '取消成功，请将单片机开关打开即可生效',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          message: '取消失败',
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
