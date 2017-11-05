import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ErrorHandler, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { Camera } from '@ionic-native/camera';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { IonicStorageModule, Storage } from '@ionic/storage';
import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';

import { Items } from '../mocks/providers/items';
import { Settings } from '../providers/providers';
import { User } from '../providers/providers';
import { Api } from '../providers/providers';
import { MyApp } from './app.component';

import { AuthHttp, AuthModule, AuthConfig, AUTH_PROVIDERS, provideAuth } from 'angular2-jwt';
import { HttpModule, Http, Headers } from '@angular/http';

import { ThiefWarningPage } from '../pages/thief-warning/thief-warning';
import { ThiefWarningHistoryPage } from '../pages/thief-warning-history/thief-warning-history';
import { ThiefFakeKeyPage } from '../pages/thief-fake-key/thief-fake-key';
import { ThiefDemolitionLockCorePage } from '../pages/thief-demolition-lock-core/thief-demolition-lock-core';
import { ThiefPryDoorPage } from '../pages/thief-pry-door/thief-pry-door';


// The translate loader needs to know where to load i18n files
// in Ionic's static asset pipeline.
export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

export function provideSettings(storage: Storage) {
  /**
   * The Settings provider takes a set of default settings for your app.
   *
   * You can add new settings options at any time. Once the settings are saved,
   * these values will not overwrite the saved values (this can be done manually if desired).
   */
  return new Settings(storage, {
    option1: true,
    option2: 'Ionitron J. Framework',
    option3: '3',
    option4: 'Hello'
  });
}

@NgModule({
  declarations: [
    MyApp,
    ThiefWarningPage,
    ThiefWarningHistoryPage,
    ThiefFakeKeyPage,
    ThiefDemolitionLockCorePage,
    ThiefPryDoorPage
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    HttpModule,
    AuthModule,
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    IonicModule.forRoot(MyApp),
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    ThiefWarningPage,
    ThiefWarningHistoryPage,
    ThiefFakeKeyPage,
    ThiefDemolitionLockCorePage,
    ThiefPryDoorPage
  ],
  providers: [
    Api,
    Items,
    User,
    Camera,
    SplashScreen,
    StatusBar,
    AuthHttp,
    provideAuth({
      headerName: 'Authorization',
      headerPrefix: 'bearer',
      tokenName: 'token',
      tokenGetter: (() => localStorage.getItem('token')),
      globalHeaders: [{ 'Content-Type': 'application/json' }],
      noJwtError: true
    }),
    { provide: Settings, useFactory: provideSettings, deps: [Http, Storage] },
    // Keep this to enable Ionic's runtime error handling during development
    { provide: ErrorHandler, useClass: IonicErrorHandler }
  ]
})
export class AppModule { }
