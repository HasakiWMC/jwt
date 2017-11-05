import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the NetworkConnectionDetectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-network-connection-detection',
  templateUrl: 'network-connection-detection.html',
})
export class NetworkConnectionDetectionPage {

  isStartDetection: boolean;
  detectionRate: number;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.isStartDetection = false;
    this.detectionRate = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkConnectionDetectionPage');
  }

  startDetection() {
    this.isStartDetection = true;
    var dectectionTime = setInterval(() => {
      this.getdetectionRate();
    }, 2000);
  }

  public getdetectionRate() {
    this.detectionRate = this.detectionRate + 10;
  }


}
