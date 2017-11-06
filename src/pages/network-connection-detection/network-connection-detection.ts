import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { ViewChild, QueryList, ElementRef, AfterViewInit, Renderer, OnInit } from '@angular/core';

@IonicPage()
@Component({
  selector: 'page-network-connection-detection',
  templateUrl: 'network-connection-detection.html',
})


export class NetworkConnectionDetectionPage {

  isStartDetection: boolean;
  isOverDetection: boolean;
  curRate: number;
  preRate: number;
  dectectionTime: any;

  @ViewChild('myProgressBar')
  myProgressBar: ElementRef;

  constructor(public navCtrl: NavController, public navParams: NavParams, private elementRef: ElementRef, private renderer: Renderer) {
    this.isStartDetection = false;
    this.isOverDetection = false;
    this.curRate = 0;
    this.preRate = 0;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad NetworkConnectionDetectionPage');
  }

  startDetection() {
    this.curRate = 0;
    this.isOverDetection = false;
    this.isStartDetection = true;
    this.dectectionTime = setInterval(() => {
      this.getdetectionRate();
    }, 2000);

  }

  public getdetectionRate() {
    if (this.curRate < 100) {
      this.preRate = this.curRate;
      this.curRate = this.curRate + 10;
      var delta = this.curRate - this.preRate;
      this.renderer.setElementStyle(this.myProgressBar.nativeElement, 'width', this.curRate + '%');
    }
    else {
      clearInterval(this.dectectionTime)
      this.isOverDetection = true;
    }

  }

  closeDetection() {
    clearInterval(this.dectectionTime)
    this.isStartDetection = false;
    this.curRate = 0
  }
  // ngAfterViewInit() {
  //   // this.myProgressBar.nativeElement.style.width = '20%';
  //   // this.renderer.setElementStyle(this.myProgressBar.nativeElement, 'width', '20%');
  // }

  // ngOnInit() {

  // }
}
