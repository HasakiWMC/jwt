import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThiefDemolitionLockCorePage } from './thief-demolition-lock-core';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // ThiefDemolitionLockCorePage,
  ],
  imports: [
    // IonicPageModule.forChild(ThiefDemolitionLockCorePage),
    TranslateModule.forChild()
  ],
})
export class ThiefDemolitionLockCorePageModule { }
