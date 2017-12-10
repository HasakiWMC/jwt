import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { WelcomePage } from '../welcome/welcome';
import { LoginPage } from '../login/login';

@IonicPage()
@Component({
  selector: 'page-signup',
  templateUrl: 'signup.html'
})
export class SignupPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { phone: string, email: string, password: string, passwordAgain: string } = {
    phone: '',
    email: '',
    password: '',
    passwordAgain: ''
  };

  // Our translated text strings
  private signupErrorString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService) {

    this.translateService.get('SIGNUP_ERROR').subscribe((value) => {
      this.signupErrorString = value;
    })
  }

  doSignup() {
    // Attempt to login in through our User service
    if (!this.validateInput()) {
      return
    }

    this.user.signup(this.account).subscribe((resp) => {
      if (resp) {
        // var res = resp.json();
        // var msg = res['_data']['msg']
        // var status = res['_data']['status']
        // console.log(status);

        var res = resp.json();
        var msg = res['msg']
        var status = res['status']
        console.log(status);
      }
      if (status == true) {
        localStorage.setItem('username', this.account.phone)

        this.navCtrl.push(LoginPage);

        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      } else {
        this.navCtrl.push(WelcomePage);

        let toast = this.toastCtrl.create({
          message: msg,
          duration: 3000,
          position: 'top'
        });
        toast.present();
      }
    }, (err) => {
      this.navCtrl.push(WelcomePage);

      // Unable to sign up
      let toast = this.toastCtrl.create({
        message: this.signupErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }

  validateInput() {
    var isCorrect = true;
    if (this.account.phone == "" || this.account.password == "" || this.account.passwordAgain == "") {
      this.signupErrorString = "输入不能为空"
      isCorrect = false;
    } else if (this.account.password != this.account.passwordAgain) {
      this.signupErrorString = "两次密码不一致"
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
