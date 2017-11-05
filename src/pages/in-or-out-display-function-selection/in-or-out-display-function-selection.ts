import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

/**
 * Generated class for the InOrOutDisplayFunctionSelectionPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-in-or-out-display-function-selection',
  templateUrl: 'in-or-out-display-function-selection.html',
})
export class InOrOutDisplayFunctionSelectionPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InOrOutDisplayFunctionSelectionPage');
  }

}
