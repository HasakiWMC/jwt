import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThiefWarningHistoryPage } from './thief-warning-history';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // ThiefWarningHistoryPage,
  ],
  imports: [
    // IonicPageModule.forChild(ThiefWarningHistoryPage),
    TranslateModule.forChild()
  ],
})
export class ThiefWarningHistoryPageModule { }
