import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TranslateModule } from '@ngx-translate/core';

import { ForgetPwdPage } from './forget-pwd';

@NgModule({
  declarations: [
    ForgetPwdPage,
  ],
  imports: [
    IonicPageModule.forChild(ForgetPwdPage),
    TranslateModule.forChild()
  ],
  exports: [
    ForgetPwdPage
  ]
})
export class ForgetPwdPageModule {}
