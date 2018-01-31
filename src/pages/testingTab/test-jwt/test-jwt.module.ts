import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TestJwtPage } from './test-jwt';

@NgModule({
  declarations: [
    TestJwtPage,
  ],
  imports: [
    IonicPageModule.forChild(TestJwtPage),
  ],
})
export class TestJwtPageModule {}
