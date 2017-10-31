import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

import { ThiefWarningPage } from '../thief-warning/thief-warning';

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
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  openItem(msgId: number) {
    if (msgId == 1) {
      this.navCtrl.push(ThiefWarningPage);
    }

  }
}
