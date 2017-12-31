import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the ThiefPryDoorPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-thief-pry-door',
  templateUrl: 'thief-pry-door.html',
})
export class ThiefPryDoorPage {
  thiefWarningPryDoorItems: any[];

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.thiefWarningPryDoorItems = navParams.get('thiefPryDoor');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ThiefPryDoorPage');
  }

}
