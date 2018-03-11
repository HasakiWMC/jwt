import {Component, ViewChild} from '@angular/core';
import {TranslateService} from '@ngx-translate/core';
import {IonicPage, NavController, Platform, Tabs} from 'ionic-angular';
import {BackButtonService} from "../../services/backButton.service";

import {Tab1Root} from '../pages';
import {Tab2Root} from '../pages';
import {Tab3Root} from '../pages';
import {Tab4Root} from '../pages';
import {MessageRoot} from '../pages';
import {DeviceRoot} from '../pages';
import {AccountRoot} from '../pages';
import {TestingRoot} from '../pages';

import {NativeAudio} from '@ionic-native/native-audio';
import {JPush} from 'ionic3-jpush';
import {User} from '../../providers/providers';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  @ViewChild('myTabs') tabRef: Tabs;

  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  messageRoot: any = MessageRoot;
  deviceRoot: any = DeviceRoot;
  accountRoot: any = AccountRoot;
  testingRoot: any = TestingRoot;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  messageTitle = " ";
  deviceTitle = " ";
  accountTitle = " ";
  testingTitle = " ";


  constructor(public navCtrl: NavController,
              public translateService: TranslateService,
              private platform: Platform,
              public backButtonService: BackButtonService,
              private jPush: JPush,
              private nativeAudio: NativeAudio,
              public user: User,) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE', 'MSG_TITLE', 'DEVICE_TITLE', 'ACCOUNT_TITLE', 'TEST_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
      this.messageTitle = values['MSG_TITLE'];
      this.deviceTitle = values['DEVICE_TITLE'];
      this.accountTitle = values['ACCOUNT_TITLE'];
      this.testingTitle = values['TEST_TITLE'];
    });

    platform.ready().then(() => {
      this.backButtonService.registerBackButtonAction(this.tabRef);
    });

    this.jPush.init();
    this.setAlias();

    this.nativeAudio.preloadSimple('uniqueId1', 'assets/media/warn_clip.mp3').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });

    let that = this;

    document.addEventListener("jpush.receiveMessage", function (event) {
      console.log("receiveMessage");
    }, false)

    document.addEventListener("jpush.receiveNotification", function (event) {
      console.log("receiveNotification");
      if (event['alert'] != null && event['alert'].indexOf("warn") >= 0) {
        that.vibrationAndMedia();
        let alert = event['alert'];
        if (alert.indexOf("warn_1_1") >= 0) {
          localStorage.setItem("signalThiefWarningLog_1", "true");
        } else if (alert.indexOf("warn_1_2") >= 0) {
          localStorage.setItem("signalThiefWarningLog_2", "true");
        } else if (alert.indexOf("warn_1_3") >= 0) {
          localStorage.setItem("signalThiefWarningLog_3", "true");
        } else if (alert.indexOf("warn_2") >= 0) {
          localStorage.setItem("signalMessageItem_2", "true");
        }
      }
      if (event['alert'] != null && event['alert'].indexOf("prompt") >= 0) {
        localStorage.setItem("signalMessageItem_3", "true");
        let methodItem = localStorage.getItem('methodItem');
        if (methodItem == null) {
          console.log("null")
        } else {
          switch (methodItem) {
            case '1':
              break;
            case '2':
              that.media();
              break;
            case '3':
              navigator.vibrate([
                1000, 1000, 1000, 1000
              ]);
              break;
            case '4':
              that.vibrationAndMedia()
          }

        }
      }
    }, false);

    document.addEventListener("jpush.openNotification", function (event) {
      console.log("openNotification");
      that.stopVibrationAndMedia()
    }, false);

    document.addEventListener("jpush.setTagsWithAlias", function (event) {
      console.log("setTagsWithAlias");
    }, false)
  }

  media() {
    this.nativeAudio.play('uniqueId1').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });
  }

  setAlias() {
    this.user.user().subscribe((resp2) => {
      let res2 = resp2.json();
      let alias = 'smartLocker_' + res2['data']['id'];
      this.jPush.setAlias({sequence: 1, alias: alias}).then(function (result) {
        localStorage.setItem('alias', alias);
        console.log("set the alias!")
      }, function (error) {
        let sequence = error.sequence;
        console.log(sequence)
      });
      console.log(alias);
    }, (err2) => {
      console.error("get alias err")
    });
  }

  vibrationAndMedia() {
    this.media();
    navigator.vibrate([
      1000, 1000, 1000, 1000
    ]);
  }

  stopVibrationAndMedia() {
    this.nativeAudio.stop('uniqueId1').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });
    navigator.vibrate(0);
  }
}
