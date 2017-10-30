import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { MessagePage } from './message';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    MessagePage,
  ],
  imports: [
    IonicPageModule.forChild(MessagePage),
    TranslateModule.forChild()
  ],
})
export class MessagePageModule { }
