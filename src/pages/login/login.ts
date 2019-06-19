import { Component } from '@angular/core';
import { NavController, LoadingController } from 'ionic-angular';
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
  registerCredentials = { username: '', password: '' };

  constructor(private storage: StorageProvider, public globalVars : GlobalVarsProvider, public rest: RestProvider, public navCtrl: NavController, public loadingCtrl : LoadingController)
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
    this.rest.login(this.registerCredentials.username, this.registerCredentials.password).then(data => {
        this.jsonData = data;
        this.user.username = this.registerCredentials.username;
        this.user.password = this.registerCredentials.password;
        this.user.token = this.jsonData.auth_token;
        this.storage.addUser(this.user).then(val => {
          console.log("Token " + val.token + " has been saved!");
        }).catch(err => {
          console.log(err);
        });
        this.dataRetrieved = true;
        this.goToHomePage(this.registerCredentials.username);
      });
    loading.dismiss();
  }

  goToHomePage(name: string) {
      this.navCtrl.push(HomePage, {username: name});
  }
}