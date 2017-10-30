import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ModalController } from 'ionic-angular';

import { Item } from '../../models/item';
import { Items } from '../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  msgItems: Item[];
  profilePic: any

  constructor(public navCtrl: NavController, public navParams: NavParams, public items: Items, public modalCtrl: ModalController) {
    this.profilePic = "assets/img/warn.png";
    this.msgItems = [
      {
        "name": "有盗报警",
        "hasSignal": true
      },
      {
        "name": "钥匙遗忘拔出报警",
        "hasSignal": true
      },
      {
        "name": "有人出入门",
        "hasSignal": false
      }
    ];
    // this.msgItems = this.items.query();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  openItem(item: Item) {
    this.navCtrl.push('ItemDetailPage', {
      item: item
    });
  }
}
