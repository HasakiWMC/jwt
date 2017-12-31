import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';

/**
 * Generated class for the ThiefWarningHistoryPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-warning-history',
  templateUrl: 'thief-warning-history.html',
})
export class ThiefWarningHistoryPage {
  thiefWarningHistoryItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thiefWarningHistoryItems = navParams.get('thiefWarning');
    this.warnId2WarnName();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefWarningHistoryPage');
  }

  warnId2WarnName() {
    for (let i = 0; i < this.thiefWarningHistoryItems.length; i++) {
      let warning_log = this.thiefWarningHistoryItems[i]['thiefWarningId'];
      switch (warning_log) {
        case 1:
          this.thiefWarningHistoryItems[i]['name'] = "盗贼假钥匙开锁报警";
          break;
        case 2:
          this.thiefWarningHistoryItems[i]['name'] = "盗贼拆锁芯报警";
          break;
        case 3:
          this.thiefWarningHistoryItems[i]['name'] = "盗贼撬门报警";
          break;
      }
    }
  }

}
