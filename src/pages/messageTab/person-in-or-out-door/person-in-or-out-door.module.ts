import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { PersonInOrOutDoorPage } from './person-in-or-out-door';
import { TranslateModule } from '@ngx-translate/core';

@NgModule({
  declarations: [
    // PersonInOrOutDoorPage,
  ],
  imports: [
    // IonicPageModule.forChild(PersonInOrOutDoorPage),
    TranslateModule.forChild()
  ],
})
export class PersonInOrOutDoorPageModule { }
