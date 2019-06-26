import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';
import { Network } from '@ionic-native/network'; 
import { HttpClientModule } from '@angular/common/http';
import { HttpModule } from '@angular/http';
import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { TabsPage } from '../pages/tabs/tabs';
import { LoginPage } from '../pages/login/login';
import { NgxQRCodeModule } from 'ngx-qrcode2';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';
import { RestProvider } from '../providers/rest/rest';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { SearchPipe } from '../pipes/search/search';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';
import {TestPage} from "../pages/test/test";
import {SafeHtmlPipe} from "../pipes/safe-html/safe-html";
import { RoomPage } from '../pages/room/room';
import { QuestionPage } from '../pages/question/question';
import { StorageProvider } from '../providers/storage/storage';
import { IonicStorageModule } from '@ionic/storage';

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    TabsPage,
    LoginPage,
    TestPage,
    RoomPage,
    QuestionPage,
    SearchPipe,
    SafeHtmlPipe
  ],
  imports: [
    BrowserModule,
    NgxQRCodeModule,
    HttpClientModule,
    IonicModule.forRoot(MyApp, {
      menuType: 'push',
      platforms: {
        ios: {
          menuType: 'overlay',
        }
      }
    }),
    HttpModule,
    IonicStorageModule.forRoot()
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    LoginPage,
    TestPage,
    RoomPage,
    TabsPage,
    QuestionPage,
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    BarcodeScanner,
    RestProvider,
    Network,
    OpenNativeSettings,
    GlobalVarsProvider,
    StorageProvider
  ]
})
export class AppModule {}
