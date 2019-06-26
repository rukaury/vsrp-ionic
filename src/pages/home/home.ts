import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController, LoadingController, NavParams } from 'ionic-angular';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";
import { Room } from '../../Models/room';
import { RoomPage } from '../room/room';
import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})

export class HomePage {
  jsonData: any;
  username: string;
  password: string;
  allRooms: Room[];
  dataRetrieved: boolean;
  token = '';

  constructor(private storage: StorageProvider, private restProvider: RestProvider, public navParams: NavParams, public globalVars : GlobalVarsProvider, public navCtrl: NavController, public loadingCtrl : LoadingController, public cd : ChangeDetectorRef)
  {
    this.username = navParams.get('username');
    this.password = navParams.get('password');
    this.storage.getUser().then((val) => {
      this.username = val.username;
      this.password = val.password;
      this.token = val.token;
      this.getRooms();
    });
  }

  getRooms(){
    let loading = this.loadingCtrl.create({
      content: '',
      spinner: 'ios',
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.restProvider.getRooms(this.token)
      .then(data => {
        this.jsonData = data;
        this.allRooms = new Array(this.jsonData.rooms.length);
        for (let i = 0; i < this.jsonData.rooms.length; i++) {
          let room = new Room(this.jsonData.rooms[i].name, this.jsonData.rooms[i].room_id, this.jsonData.rooms[i].active);
      this.allRooms[i] = room;
        }
        this.dataRetrieved = true;
      }).catch(err => {
        if((err.error.message == "Signature expired, Please sign in again" || "Token was Blacklisted, Please login In") && err.status == 401){
          this.restProvider.login(this.username, this.password).then(data => {
            this.jsonData = data;
            this.storage.updateToken(this.jsonData.auth_token).then(aUser => {
              this.token = aUser.token;
              this.getRooms();
            }).catch((err) => {
              console.log("Token update: " + err);
            })
          }).catch((err) => {
            console.log("Login: " + err);
          })
        }
      });
    loading.dismiss();
  }

  goToRoomPage(room_id: string, name: string) {
    room_id = room_id || "";
    this.navCtrl.push(RoomPage, {
      room_id: room_id, roomName: name
    });
  }
}

