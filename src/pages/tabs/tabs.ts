import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController } from 'ionic-angular';

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { MessageRoot } from '../pages';
import { DeviceRoot } from '../pages';
import { AccountRoot } from '../pages';


@IonicPage()
@Component({
  selector: 'page-tabs',
  templateUrl: 'tabs.html'
})
export class TabsPage {
  tab1Root: any = Tab1Root;
  tab2Root: any = Tab2Root;
  tab3Root: any = Tab3Root;
  tab4Root: any = Tab4Root;
  messageRoot: any = MessageRoot;
  deviceRoot: any = DeviceRoot;
  accountRoot: any = AccountRoot;

  tab1Title = " ";
  tab2Title = " ";
  tab3Title = " ";
  tab4Title = " ";
  messageTitle = " ";
  deviceTitle = " ";
  accountTitle = " ";


  constructor(public navCtrl: NavController, public translateService: TranslateService) {
    translateService.get(['TAB1_TITLE', 'TAB2_TITLE', 'TAB3_TITLE', 'TAB4_TITLE', 'MSG_TITLE', 'DEVICE_TITLE', 'ACCOUNT_TITLE']).subscribe(values => {
      this.tab1Title = values['TAB1_TITLE'];
      this.tab2Title = values['TAB2_TITLE'];
      this.tab3Title = values['TAB3_TITLE'];
      this.tab4Title = values['TAB4_TITLE'];
      this.messageTitle = values['MSG_TITLE'];
      this.deviceTitle = values['DEVICE_TITLE'];
      this.accountTitle = values['ACCOUNT_TITLE'];
    });
  }
}
