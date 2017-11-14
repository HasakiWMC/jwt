import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, ToastController } from 'ionic-angular';

import { User } from '../../providers/providers';
import { MainPage } from '../pages';
import { WelcomePage } from '../welcome/welcome';
import { JPush } from 'ionic3-jpush';

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {
  // The account fields for the login form.
  // If you're using the username field with or without email, make
  // sure to add it to the type
  account: { username: string, password: string } = {
    username: 'wmc',
    password: 'test'
  };

  // Our translated text strings
  private loginErrorString: string;
  private loginSuccessString: string;

  constructor(public navCtrl: NavController,
    public user: User,
    public toastCtrl: ToastController,
    public translateService: TranslateService,
    private jPush: JPush) {

    this.translateService.get('LOGIN_ERROR').subscribe((value) => {
      this.loginErrorString = value;
    })

    this.translateService.get('LOGIN_SUCCESS').subscribe((value) => {
      this.loginSuccessString = value;
    })
  }

  // Attempt to login in through our User service
  doLogin() {
    this.user.login(this.account).subscribe((resp) => {
      var res = resp.json();
      if (res['access_token']) {
        localStorage.setItem('token', res['access_token'])
      }
      let toast = this.toastCtrl.create({
        message: this.loginSuccessString,
        duration: 1000,
        position: 'top'
      });
      toast.present();
      this.navCtrl.push(MainPage);

      this.user.user().subscribe((resp2) => {
        var res2 = resp2.json();
        var alias = 'smartLocker_' + res2['data']['id']
        console.log(alias)
        this.jPush.setAlias({ sequence: 1, alias: alias }).then(function (result) {

        }, function (error) {
          var sequence = error.sequence

        })
      }, (err2) => {
        console.error("get alias err")
      });

    }, (err) => {
      this.navCtrl.push(WelcomePage);
      // Unable to log in
      let toast = this.toastCtrl.create({
        message: this.loginErrorString,
        duration: 3000,
        position: 'top'
      });
      toast.present();
    });
  }
}
