import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, ToastController} from 'ionic-angular';
import {User} from "../../../providers/user/user";

@IonicPage()
@Component({
  selector: 'page-change-pwd',
  templateUrl: 'change-pwd.html',
})
export class ChangePwdPage {

  account: { old_password: string, new_password: string, passwordAgain: string } = {
    old_password: '',
    new_password: '',
    passwordAgain: ''
  };

  private signupErrorString: string;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public user: User,
              public toastCtrl: ToastController) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ChangePwdPage');
  }

  doChange() {
    if (!this.validateInput()) {
      return
    }

    let phone = localStorage.getItem('username');

    let option = {
      phone: phone,
      old_password: this.account.old_password,
      new_password: this.account.new_password
    };

    this.user.changePwd(option).subscribe((resp) => {
      if (resp) {

        var res = resp.json();
        var msg = res['msg'];
        var status = res['status'];
        console.log(status);
      }

      let toast = this.toastCtrl.create({
        message: msg,
        duration: 3000,
        position: 'top'
      });
      toast.present();
      if (status == true) {
        this.navCtrl.pop();
      }
    }, (err) => {
      let toast = this.toastCtrl.create({
        message: "修改密码失败",
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });

  }

  validateInput() {
    let isCorrect = true;
    if (this.account.old_password == "" || this.account.new_password == "" || this.account.passwordAgain == "") {
      this.signupErrorString = "输入不能为空";
      isCorrect = false;
    } else if (this.account.new_password != this.account.passwordAgain) {
      this.signupErrorString = "两次密码不一致";
      isCorrect = false;
    }
    if (!isCorrect) {
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 1000,
        position: 'top'
      });
      toast.present();
      return false;
    } else {
      return true;
    }
  }
}
