import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { ThiefWarningPage } from '../thief-warning/thief-warning';
import { KeyForgetWarningPage } from '../key-forget-warning/key-forget-warning';
import { PersonInOrOutDoorPage } from '../person-in-or-out-door/person-in-or-out-door';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  msgItems: any[];
  profilePic: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public modalCtrl: ModalController) {
    this.profilePic = "assets/img/warn.png";
    this.msgItems = [
      {
        "msgId": 1,
        "name": "有盗报警",
        "hasSignal": true
      },
      {
        "msgId": 2,
        "name": "钥匙遗忘拔出报警",
        "hasSignal": true
      },
      {
        "msgId": 3,
        "name": "有人出入门",
        "hasSignal": false
      }
    ];
    // this.msgItems = this.items.query();

    localStorage.setItem("signalThiefWarningLog_" + 1,"true");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  openItem(msgId: number) {
    if (msgId == 1) {
      this.navCtrl.push(ThiefWarningPage);
    } else if (msgId == 2) {
      this.navCtrl.push(KeyForgetWarningPage);
    } else if (msgId == 3) {
      this.navCtrl.push(PersonInOrOutDoorPage);
    }

  }
}
