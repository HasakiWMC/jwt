import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ModalController, ToastController} from 'ionic-angular';

import {Items} from '../../../providers/providers';

import {ThiefWarningPage} from '../thief-warning/thief-warning';
import {KeyForgetWarningPage} from '../key-forget-warning/key-forget-warning';
import {PersonInOrOutDoorPage} from '../person-in-or-out-door/person-in-or-out-door';
import {User} from '../../../providers/providers';

@IonicPage()
@Component({
  selector: 'page-message',
  templateUrl: 'message.html',
})
export class MessagePage {
  msgItems: any[];
  profilePic: any;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public items: Items,
              public modalCtrl: ModalController,
              public toastCtrl: ToastController,
              public user: User,) {


    this.profilePic = "assets/img/warn.png";
    this.msgItems = [
      {
        "msgId": 1,
        "name": "有盗报警",
        "hasSignal": localStorage.getItem("signalThiefWarningLog_1")
      },
      {
        "msgId": 2,
        "name": "钥匙遗忘拔出报警",
        "hasSignal": localStorage.getItem("signalThiefWarningLog_2")
      },
      {
        "msgId": 3,
        "name": "有人出入门",
        "hasSignal": localStorage.getItem("signalThiefWarningLog_3")
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad MessagePage');
  }

  ionViewWillEnter() {
    console.log('ionViewWillEnter MessagePage');

    //有盗报警的红点根据子页里是否有消息(红点)决定
    let thiefFakeKey_display = localStorage.getItem("signalThiefWarningLog_1");
    let thiefDemolitionLockCore_display = localStorage.getItem("signalThiefWarningLog_2");
    let thiefPryDoor_display = localStorage.getItem("signalThiefWarningLog_3");
    if (thiefFakeKey_display != "true" && thiefDemolitionLockCore_display != "true" && thiefPryDoor_display != "true") {
      localStorage.setItem("signalThiefWarningLog_1", "false");
    } else {
      localStorage.setItem("signalThiefWarningLog_1", "true");
    }
    this.msgItems[0]["hasSignal"] = localStorage.getItem("signalThiefWarningLog_1");
    console.log(this.msgItems[0]["hasSignal"]);
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
