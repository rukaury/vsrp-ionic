import { Component } from '@angular/core';
import { NavController, LoadingController, AlertController } from 'ionic-angular';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";
import { RestProvider } from "../../providers/rest/rest"
import { HomePage } from '../home/home';
import { StorageProvider, User } from '../../providers/storage/storage';

@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})

export class LoginPage {
  jsonData: any;
  token: string;
  user: User = <User>{};
  dataRetrieved: boolean;
  username: '';
  password: '';

  constructor(private storage: StorageProvider, public globalVars : GlobalVarsProvider, public rest: RestProvider, public navCtrl: NavController, public loadingCtrl : LoadingController, private alert :AlertController)
  {
    this.dataRetrieved = false;
  }

  public login() {
    let loading = this.loadingCtrl.create({
      content: '',
      spinner: 'ios',
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.rest.login(this.username, this.password).then(data => {
        this.jsonData = data;
        this.user.username = this.username;
        this.user.password = this.password;
        this.user.token = this.jsonData.auth_token;
        this.storage.addUser(this.user).then(val => {
          console.log("Logged in!");
        }).catch(err => {
          console.log(err);
        });
        this.dataRetrieved = true;
        this.goToHomePage();
      }).catch((err) => {
          switch(err.status){
            case 401:
              this.presentAlert('Login', 'User does not exist or password is incorrect');
              break;
            default:
              this.presentAlert('Login', 'Soory, an error has occured!');
              break;
          }
      });
    loading.dismiss();
  }

  goToHomePage() {
      this.navCtrl.push(HomePage);
  }

  presentAlert(title : string, message: string): void {
		let alert = this.alert.create({
			title:  title,
			message: message,
			buttons: ['Ok']
		});
		alert.present();
  }
  
  delay(ms: number) {
    return new Promise( resolve => setTimeout(resolve, ms) );
  }
}