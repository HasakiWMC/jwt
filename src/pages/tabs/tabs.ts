import { Component, ViewChild } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';
import { IonicPage, NavController, Platform, Tabs } from 'ionic-angular';
import { BackButtonService } from "../../services/backButton.service";

import { Tab1Root } from '../pages';
import { Tab2Root } from '../pages';
import { Tab3Root } from '../pages';
import { Tab4Root } from '../pages';
import { MessageRoot } from '../pages';
import { DeviceRoot } from '../pages';
import { AccountRoot } from '../pages';
import { TestingRoot } from '../pages';


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


  constructor(
    public navCtrl: NavController,
    public translateService: TranslateService,
    private platform: Platform,
    public backButtonService: BackButtonService) {
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
  }
}
