import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThiefFakeKeyPage } from './thief-fake-key';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // ThiefFakeKeyPage,
  ],
  imports: [
    // IonicPageModule.forChild(ThiefFakeKeyPage),
    TranslateModule.forChild()
  ],
})
export class ThiefFakeKeyPageModule { }
