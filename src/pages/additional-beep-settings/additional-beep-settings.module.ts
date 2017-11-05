import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { AdditionalBeepSettingsPage } from './additional-beep-settings';

@NgModule({
  declarations: [
    AdditionalBeepSettingsPage,
  ],
  imports: [
    IonicPageModule.forChild(AdditionalBeepSettingsPage),
  ],
})
export class AdditionalBeepSettingsPageModule {}
