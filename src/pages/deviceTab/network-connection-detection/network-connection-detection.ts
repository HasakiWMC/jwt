import {Component} from '@angular/core';
import {IonicPage, NavController, NavParams, LoadingController, ToastController} from 'ionic-angular';
import {ViewChild, QueryList, Renderer, OnInit} from '@angular/core';
import {Api} from "../../../providers/api/api";

@IonicPage()
@Component({
  selector: 'page-network-connection-detection',
  templateUrl: 'network-connection-detection.html',
})


export class NetworkConnectionDetectionPage {

  isStartDetection: boolean;
  isOverDetection: boolean;
  successRate: any;
  detectionTime: number;
  loadingInstance: any;
  //loading框超时秒数
  loadingTimeOut: number;
  //尝试查询的次数
  tryTime: number;

  constructor(public navCtrl: NavController,
              public navParams: NavParams,
              public api: Api,
              public toastCtrl: ToastController,
              public loadingCtrl: LoadingController) {
    this.isStartDetection = false;
    this.isOverDetection = false;
    this.loadingTimeOut = 10;
    this.tryTime = 0;
  }

  presentLoadingDefault() {
    this.loadingInstance = this.loadingCtrl.create({
      content: '正在进行网络检测...',
      // duration: this.loadingTimeOut * 1000
    });

    this.loadingInstance.present();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkConnectionDetectionPage');
  }

  startDetection() {
    let seq = this.api.authPost('device/networkDetection', {}).share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        this.tryTime = 0;
        this.presentLoadingDefault();
        this.isOverDetection = false;
        this.isStartDetection = true;
        this.detectionTime = setInterval(() => {
          this.getDetectionResult();
        }, 1000);
      } else {
        let toast = this.toastCtrl.create({
          message: '启动网络检测失败',
          duration: 1000,
          position: 'top'
        });
        toast.present();
      }
    }, err => {
      console.error('ERROR', err);
    });
    return seq;
  }

  public getDetectionResult() {
    //向后台查询是否有成功率的值，如果查询到结束定时查找函数，并消除Loading框
    let seq = this.api.authGet('device/networkQuery').share();
    seq.subscribe((resp: any) => {
      let res = resp.json();
      console.log(res);
      if (res['status'] == true) {
        this.successRate = res['msg'];
        this.loadingInstance.dismiss();
        clearInterval(this.detectionTime);
        this.isOverDetection = true
      } else if (this.tryTime < this.loadingTimeOut) {
        this.tryTime++;
      } else {
        this.loadingInstance.dismiss();
        this.isOverDetection = true;
        this.successRate = "网络不通";
        clearInterval(this.detectionTime);
      }

    }, err => {
      console.error('ERROR', err);
    });
    return seq;


  }
}
