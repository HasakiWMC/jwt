import { Component } from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {Api} from '../../../providers/api/api';

/**
 * Generated class for the DeviceBindingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device-binding',
  templateUrl: 'device-binding.html',
})
export class DeviceBindingPage {

  binding: { serial: string, password: string } = {
    serial: '',
    password: ''
  };

  private bindingErrorString: string;
  private bindingSuccessString: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public api: Api) {
    this.bindingErrorString = "绑定失败";
    this.bindingSuccessString = "绑定成功"
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DeviceBindingPage');
  }

  doBinding() {
    let option = {
      "binding": this.binding
    };
    let seq = this.api.authPost('account/deviceBinding', option).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        localStorage.setItem('serial', String(this.binding.serial));
        let toast = this.toastCtrl.create({
          message: this.bindingSuccessString,
          duration: 1000,
          position: 'top'
        });
        toast.present();
      } else {
        let toast = this.toastCtrl.create({
          message: this.bindingErrorString,
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
