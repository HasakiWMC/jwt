import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThiefWarningPage } from './thief-warning';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // ThiefWarningPage,
  ],
  imports: [
    // IonicPageModule.forChild(ThiefWarningPage),
    TranslateModule.forChild()
  ],
})
export class ThiefWarningPageModule { }
