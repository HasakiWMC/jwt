import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInOrOutDoorHistoryPage } from './person-in-or-out-door-history';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // PersonInOrOutDoorHistoryPage,
  ],
  imports: [
    // IonicPageModule.forChild(PersonInOrOutDoorHistoryPage),
    TranslateModule.forChild()
  ],
})
export class PersonInOrOutDoorHistoryPageModule { }
