import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController} from 'ionic-angular';
import {WelcomePage} from '../welcome/welcome'

import {JPush} from 'ionic3-jpush';

/**
 * Generated class for the AccountPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-account',
  templateUrl: 'account.html',
})
export class AccountPage {

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public modalCtrl: ModalController,
              private jPush: JPush,) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad AccountPage');
  }

  logOut() {
    localStorage.removeItem('token');
    this.jPush.deleteAlias({sequence: 1}).then(function (result) {
      console.log("delete the alias!")
    }, function (error) {
      let sequence = error.sequence;
      console.log(sequence)
    });

    let modal = this.modalCtrl.create(WelcomePage);
    modal.present();
  }
}
