import {Component} from "@angular/core";
import {IonicPage, NavController, NavParams, ToastController} from "ionic-angular";
import {Api} from '../../providers/api/api';
/**
 * Generated class for the InOrOutDisplayFunctionSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-or-out-display-function-selection',
  templateUrl: 'in-or-out-display-function-selection.html',
})
export class InOrOutDisplayFunctionSelectionPage {

  display: boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, public toastCtrl: ToastController, public api: Api) {
    if (localStorage.getItem('display') == null) {
      this.display = false;
    } else {
      let display_str = localStorage.getItem('display');
      this.display = (display_str == "true");
    }
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InOrOutDisplayFunctionSelectionPage');
  }

  save() {
    console.log(this.display);
    this.setIsDisplay();
  }

  setIsDisplay() {
    let option = {
      "display": this.display
    };
    let seq = this.api.authPost('device/inOutDoorDisplay', option).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        localStorage.setItem('display', String(this.display));
        let toast = this.toastCtrl.create({
          message: '保存成功',
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
}
