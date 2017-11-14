import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';
import { JPush } from 'ionic3-jpush';

import { User } from '../../providers/providers';

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
  aliasToBeSet: string;


  constructor(public user: User, public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio, private jPush: JPush) {
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/media/braveShine_clip.mp3').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });

    this.aliasToBeSet = "SmartLocker_1246"
    jPush.init();
    document.addEventListener("jpush.receiveMessage", function (event) {
      var message
      this.alias = event['message']
    }, false)
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
    this.jPush.setAlias({ sequence: 1, alias: "smartLocker_3721" }).then(function (result) {
      var sequence = result.sequence
      that.alias = result.alias
    }, function (error) {
      var sequence = error.sequence
      that.alias = error.code
    })
  }

  getAlias() {
    var that = this;
    this.jPush.getAlias({ sequence: 1 }).then(function (result) {
      var sequence = result.sequence
      that.alias = result.alias
    }, function (error) {
      var sequence = error.sequence
      that.alias = error.code
    })
  }


  getUserAlias() {
    this.user.user().subscribe((resp2) => {
      var res2 = resp2.json();
      console.log(res2)
    }, (err2) => {
      console.error("get alias err")
    });
  }

}
