import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { ThiefPryDoorPage } from './thief-pry-door';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    ThiefPryDoorPage,
  ],
  imports: [
    IonicPageModule.forChild(ThiefPryDoorPage),
    TranslateModule.forChild()
  ],
})
export class ThiefPryDoorPageModule { }
