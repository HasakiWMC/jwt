import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { LockFeatureConfirmPage } from '../lock-feature-confirm/lock-feature-confirm'
import { InOrOutDisplayFunctionSelectionPage } from '../in-or-out-display-function-selection/in-or-out-display-function-selection'
import { AdditionalBeepSettingsPage } from '../additional-beep-settings/additional-beep-settings'
import { NetworkConnectionDetectionPage } from '../network-connection-detection/network-connection-detection'
import { MessagingMethodSettingsPage } from '../messaging-method-settings/messaging-method-settings'


/**
 * Generated class for the DevicePage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-device',
  templateUrl: 'device.html',
})
export class DevicePage {
  deviceItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.deviceItems = [
      {
        "deviceId": 1,
        "name": "现有锁具特征确认"
      },
      {
        "deviceId": 2,
        "name": "进出门消息显示功能选择"
      },
      {
        "deviceId": 3,
        "name": "附加提示音设置"
      },
      {
        "deviceId": 4,
        "name": "网络连接检测"
      },
      {
        "deviceId": 5,
        "name": "消息传递方式设置"
      }
    ];
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad DevicePage');
  }

  openItem(deviceId: number) {
    if (deviceId == 1) {
      this.navCtrl.push(LockFeatureConfirmPage);
    } else if (deviceId == 2) {
      this.navCtrl.push(InOrOutDisplayFunctionSelectionPage);
    } else if (deviceId == 3) {
      this.navCtrl.push(AdditionalBeepSettingsPage);
    } else if (deviceId == 4) {
      this.navCtrl.push(NetworkConnectionDetectionPage);
    } else if (deviceId == 5) {
      this.navCtrl.push(MessagingMethodSettingsPage);
    }
  }
}
