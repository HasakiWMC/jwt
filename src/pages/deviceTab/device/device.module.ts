import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DevicePage } from './device';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    DevicePage,
  ],
  imports: [
    IonicPageModule.forChild(DevicePage),
    TranslateModule.forChild()
  ],
})
export class DevicePageModule { }
