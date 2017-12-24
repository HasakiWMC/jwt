import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams,ToastController  } from 'ionic-angular';

/**
 * Generated class for the MessagingMethodSettingsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-messaging-method-settings',
  templateUrl: 'messaging-method-settings.html',
})
export class MessagingMethodSettingsPage {
  methodItem: any;

  constructor(public navCtrl: NavController, public navParams: NavParams,public toastCtrl: ToastController) {
    if (localStorage.getItem('methodItem') == null) {
      this.methodItem = 1
    }
    else {
      this.methodItem = localStorage.getItem('methodItem')
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagingMethodSettingsPage');
  }

  save() {
    console.log(this.methodItem)
    localStorage.setItem('methodItem', this.methodItem)
    let toast = this.toastCtrl.create({
      message: '保存成功',
      duration: 1000
    });
    toast.present();
  }
}
