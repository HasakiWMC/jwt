import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeyForgetWarningHistoryPage } from './key-forget-warning-history';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // KeyForgetWarningHistoryPage,
  ],
  imports: [
    // IonicPageModule.forChild(KeyForgetWarningHistoryPage),
    TranslateModule.forChild()
  ],
})
export class KeyForgetWarningHistoryPageModule { }
