import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { NativeAudio } from '@ionic-native/native-audio';

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

  constructor(public navCtrl: NavController, public navParams: NavParams, private nativeAudio: NativeAudio) {
    this.nativeAudio.preloadSimple('uniqueId1', 'assets/media/braveShine_clip.mp3').then(function () {
      console.log('success')
    }, function (err) {
      console.log(err)
    });
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

}
