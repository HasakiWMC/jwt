import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';
import { ViewChild, QueryList, Renderer, OnInit } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-network-connection-detection',
  templateUrl: 'network-connection-detection.html',
})


export class NetworkConnectionDetectionPage {

  isStartDetection: boolean;
  isOverDetection: boolean;
  successRate: number;
  dectectionTime: number;
  loadingInstance: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    public loadingCtrl: LoadingController
  ) {
    this.isStartDetection = false;
    this.isOverDetection = false;
  }

  presentLoadingDefault() {
    this.loadingInstance = this.loadingCtrl.create({
      content: '正在进行网络检测...',
      duration: 10000
    });

    this.loadingInstance.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkConnectionDetectionPage');
  }

  startDetection() {
    this.presentLoadingDefault()
    this.isOverDetection = false;
    this.isStartDetection = true;
    this.dectectionTime = setInterval(() => {
      this.getdetectionResult();
    }, 1000);
  }

  public getdetectionResult() {
    //todo
    //向后台查询是否有成功率的值，如果查询到结束定时查找函数，并消除Loading框


    if (true) {
      this.successRate = 100
      this.loadingInstance.dismiss();
      clearInterval(this.dectectionTime)
      this.isOverDetection = true
    }

  }
}
