import {Component} from '@angular/core';
import {IonicPage, ModalController, NavController, NavParams, ToastController} from 'ionic-angular';
import {PersonInOrOutDoorHistoryPage} from '../person-in-or-out-door-history/person-in-or-out-door-history'
import {Api} from '../../../providers/api/api';
import {WelcomePage} from "../../loginTab/welcome/welcome";
/**
 * Generated class for the PersonInOrOutDoorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-person-in-or-out-door',
  templateUrl: 'person-in-or-out-door.html',
})
export class PersonInOrOutDoorPage {
  personInOrOutDoorItems: any[];
  personInDoorItems: any[];
  personOutDoorItems: any[];
  lastInDoorTime: string;
  lastOutDoorTime: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public toastCtrl: ToastController,
              public modalCtrl: ModalController) {
    this.getPersonInOrOutDoorItems();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad PersonInOrOutDoorPage');
  }

  queryPersonInOrOutDoorHistory() {
    this.navCtrl.push(PersonInOrOutDoorHistoryPage, {
      personInOrOutDoorItems: this.personInOrOutDoorItems
    });
  }

  getPersonInOrOutDoorItems() {
    let seq = this.api.authGet('main/inOutDoor').share();

    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        this.convert2PersonInOrOutDoor(res['data']);
        console.log(res['data']);
        console.log(this.personInDoorItems);
        console.log(this.personOutDoorItems);
      } else {
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

  convert2PersonInOrOutDoor(res: Array<any>) {
    this.lastInDoorTime = "";
    this.lastOutDoorTime = "";
    this.personInDoorItems = [];
    this.personOutDoorItems = [];
    this.personInOrOutDoorItems = [];

    for (let i = 0; i < res.length; i++) {
      let item = {};
      let common_log = res[i]['common_log'];
      item['common_log'] = common_log;
      item['time'] = res[i]['create_time'];
      switch (common_log) {
        case 1:
          item['name'] = "有人出门";
          this.personOutDoorItems.push(item);
          break;
        case 2:
          item['name'] = "有人进门";
          this.personInDoorItems.push(item);
          break;
      }
      this.personInOrOutDoorItems.push(item);
    }
    if (this.personOutDoorItems.length > 0) {
      this.lastOutDoorTime = this.personOutDoorItems[this.personOutDoorItems.length - 1]["time"];
    }
    if (this.personInDoorItems.length > 0) {
      this.lastInDoorTime = this.personInDoorItems[this.personInDoorItems.length - 1]["time"];
    }
  }
}
