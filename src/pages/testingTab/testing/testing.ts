import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams} from 'ionic-angular';
import {NativeAudio} from '@ionic-native/native-audio';
import {JPush} from 'ionic3-jpush';

import {User} from '../../../providers/providers';
import {JSMS} from '@jiguang-ionic/jsms';
/**
 * Generated class for the TestingPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-testing',
  templateUrl: 'testing.html',
})
export class TestingPage {
  alias: any;


  constructor(public user: User,
              public navCtrl: NavController,
              public navParams: NavParams,
              private nativeAudio: NativeAudio,
              private jPush: JPush,
              private jsms: JSMS) {
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/media/braveShine_clip.mp3').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });

    this.jsms.init().then(function (result) {
      // do something.
      console.log("init success")
    }, error => {
      let code = error.code;
      let desc = error.description
    })


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestingPage');
  }

  vibration() {
    navigator.vibrate(3000);
  }

  media() {

    // this.nativeAudio.preloadComplex('uniqueId2', 'path/to/file2.mp3', 1, 1, 0).then(onSuccess, onError);

    this.nativeAudio.play('uniqueId1').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });
  }

  vibrationAndMedia() {
    this.media();

    navigator.vibrate([
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000,
      1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000, 1000
    ]);

  }

  stop() {
    this.nativeAudio.stop('uniqueId1').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });
    navigator.vibrate(0);
  }

  setAlias() {
    var that = this;
    this.jPush.setAlias({sequence: 1, alias: "smartLocker_3721"}).then(function (result) {
      var sequence = result.sequence
      that.alias = result.alias
    }, function (error) {
      var sequence = error.sequence
      that.alias = error.code
    })
  }

  getAlias() {
    var that = this;
    this.jPush.getAlias({sequence: 1}).then(function (result) {
      var sequence = result.sequence
      that.alias = result.alias
    }, function (error) {
      var sequence = error.sequence
      that.alias = error.code
    })
  }

  setThiefFakeKey_displayTrue() {
    localStorage.setItem("signalThiefWarningLog_1", "true");
  }

  setThiefDemolitionLockCore_displayTrue() {
    localStorage.setItem("signalThiefWarningLog_2", "true");
  }

  setThiefPryDoor_displayTrue() {
    localStorage.setItem("signalThiefWarningLog_3", "true");
  }

  setKeyForget_displayTrue() {
    localStorage.setItem("signalMessageItem_2", "true");
  }

  setPersonInOrOutDoor_displayTrue() {
    localStorage.setItem("signalMessageItem_3", "true");
  }

  sendJSMS() {
    this.jsms.getSmsCode('18013550018', '1').then(function (result) {
      // do something.
      console.log("getSmsCode success")
    }, error => {
      let code = error.code;
      let desc = error.description
    })
  }
}
