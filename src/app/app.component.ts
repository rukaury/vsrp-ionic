import { Component } from '@angular/core';
import { Platform, AlertController } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Network } from '@ionic-native/network';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';
import { GlobalVarsProvider} from "../providers/global-vars/global-vars";
import { StorageProvider } from '../providers/storage/storage';
import { HomePage } from '../pages/home/home';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  rootPage:any;

  constructor(private globalVars : GlobalVarsProvider, private settings : OpenNativeSettings, private network : Network, private alert :AlertController, platform: Platform, statusBar: StatusBar, splashScreen: SplashScreen, private storageProvider: StorageProvider) {
    platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      statusBar.styleDefault();
      splashScreen.hide();
      this.verifyConnectivity();
      this.isUserLoggedIn();
    });
  }

  private verifyConnectivity() : void {
    this.network.onDisconnect().subscribe(() => {
      this.globalVars.setIsConnected(false);
      this.showConnectivityAlert();
    });
    this.network.onConnect().subscribe(() => {
      this.globalVars.setIsConnected(true);
      console.log('connected');
    });
  }

  private isUserLoggedIn(){
    let check : boolean = false;
    this.storageProvider.getUser().then(aUser => {
      this.rootPage = HomePage;
    }).catch(err => {
      this.rootPage = LoginPage;
      console.log(err);
    });
    return check;
  }

  private showConnectivityAlert() : void {
    let showAlert = this.alert.create({
      title: 'Network Connection',
      message: "You need to have a working wifi or network connection to use this application.",
      buttons : [
        {
          text : "Cancel",
          role: "cancel",
          handler : () => {
            console.log("Cancelled");
          }
        },
        {
          text: "Verify Wifi",
          handler: () => {
            this.settings.open('wifi').then(val => {
              console.log('wifi opened');
            }).catch(err => {
              console.log(JSON.stringify(err));
            });
          }
        }
      ]
    });
    showAlert.present();
  }
}

