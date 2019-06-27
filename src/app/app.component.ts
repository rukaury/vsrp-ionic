// Angular
import { Component, ViewChild } from '@angular/core';

// Ionic
import { Platform, MenuController, AlertController, NavController } from 'ionic-angular';

// Ionic Native
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';
import { LoginPage } from '../pages/login/login';
import { Network } from '@ionic-native/network';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

// App
import { GlobalVarsProvider} from "../providers/global-vars/global-vars";
import { StorageProvider, User } from '../providers/storage/storage';
import { HomePage } from '../pages/home/home';
import { RestProvider } from '../providers/rest/rest';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild('content') navCtrl: NavController
  rootPage:any;
  token : string;

  constructor(private globalVars : GlobalVarsProvider, private settings : OpenNativeSettings, public network : Network, private alert :AlertController, public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen, private storageProvider: StorageProvider, private menuCtrl: MenuController, private restProvider : RestProvider, private storage : StorageProvider) {
	  this.initializeApp();
  }


  initializeApp(){
	this.platform.ready().then(() => {
		// Okay, so the platform is ready and our plugins are available.
		// Here you can do any higher level native things you might need.
		this.statusBar.styleDefault();
		this.splashScreen.hide();
		this.verifyConnectivity();
		this.setRootPage();
		this.menuCtrl.enable(true);
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

  private setRootPage(){
    this.storageProvider.getUser().then((aUser : User) => {
      this.rootPage = aUser ? HomePage : LoginPage;
      if(aUser){
        this.token = aUser.token;
      }
    });
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

  logout(){
    this.restProvider.logout(this.token).then(() => {
      this.storage.deleteUser();
      this.menuCtrl.close();
      this.navCtrl.push(LoginPage);
    });
  }
}

