import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { DeviceBindingPage } from './device-binding';

@NgModule({
  declarations: [
    DeviceBindingPage,
  ],
  imports: [
    IonicPageModule.forChild(DeviceBindingPage),
  ],
})
export class DeviceBindingPageModule {}
