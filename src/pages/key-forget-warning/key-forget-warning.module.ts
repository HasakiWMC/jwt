import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { KeyForgetWarningPage } from './key-forget-warning';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    KeyForgetWarningPage,
  ],
  imports: [
    IonicPageModule.forChild(KeyForgetWarningPage),
    TranslateModule.forChild()
  ],
})
export class KeyForgetWarningPageModule { }
