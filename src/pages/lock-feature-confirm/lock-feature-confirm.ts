import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController } from 'ionic-angular';

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
  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
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
    console.log(this.lockFeatureItem)
    localStorage.setItem('lockFeatureItem', this.lockFeatureItem)
    let toast = this.toastCtrl.create({
      message: '保存成功',
      duration: 1000,
      position: 'middle'
    });
    toast.present();
  }

}
