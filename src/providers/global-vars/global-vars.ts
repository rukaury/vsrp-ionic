import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { OpenNativeSettings } from '@ionic-native/open-native-settings';

/*
  Generated class for the GlobalVarsProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class GlobalVarsProvider {
  private isConnected : boolean;

  constructor(private nativeSettings: OpenNativeSettings, public http: HttpClient) {
    this.isConnected = true;
  }

  public setIsConnected(check : boolean){
    this.isConnected = check;
  }

  public getIsConnected(){
    return this.isConnected;
  }

  public open(settings: string){
    this.nativeSettings.open(settings).then(val => {
      console.log(settings + 'opened');
    }).catch(err => {
      console.log(JSON.stringify(err));
    });
  }



}
