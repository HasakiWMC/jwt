import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { AuthHttp } from 'angular2-jwt';
import { Http, Headers } from '@angular/http';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { Api } from '../../../providers/api/api';
// import { AuthModule } from '../../app/auth.module'


/**
 * Generated class for the TestJwtPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-test-jwt',
  templateUrl: 'test-jwt.html',
})
export class TestJwtPage {

  public thing: any;

  constructor(public navCtrl: NavController, public navParams: NavParams, public authHttp: AuthHttp, public storage: Storage, public api: Api) {
    // storage.set('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ');
    localStorage.setItem('token', 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMjM0NTY3ODkwIiwibmFtZSI6IkpvaG4gRG9lIiwiYWRtaW4iOnRydWV9.TJVA95OrM7E2cBab30RMHrHDcEfxjoYZgeFONFh7HgQ')
  }

  getThing() {
    let myHeader = new Headers();
    myHeader.append('Content-Type', 'application/json');

    let seq = this.api.authPost('register', { 'email': 'wangmingcheng2016@gmail.com', 'username': 'wmc3721abcd', 'password': '123123123' }, { headers: myHeader }).share();

    seq.subscribe(
      data => this.thing = data,
      err => console.log(err),
      () => console.log('Request Complete')
    );

    // this.authHttp.post('http://localhost:5000/register', {'email':'wangmingcheng2016@gmail.com','username':'wmc3721','password':'123123123'},{ headers: myHeader })
    //   .subscribe(
    //     data => this.thing = data,
    //     err => console.log(err),
    //     () => console.log('Request Complete')
    //   );

    // Pass it after the body in a POST request
    // this.authHttp.post('http://example.com/api/thing', 'post body', { headers: myHeader })
    //   .subscribe(
    //     data => this.thing = data,
    //     err => console.log(err),
    //     () => console.log('Request Complete')
    //   );
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TestJwtPage');
  }


}
