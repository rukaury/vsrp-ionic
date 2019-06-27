import { Component, ChangeDetectorRef } from '@angular/core';
import { ModalController, NavController, LoadingController, NavParams, MenuController, AlertController  } from 'ionic-angular';
import { GlobalVarsProvider } from "../../providers/global-vars/global-vars";
import { Room } from '../../Models/room';
import { RoomPage } from '../room/room';
import { RestProvider } from '../../providers/rest/rest';
import { StorageProvider } from '../../providers/storage/storage';
import { AddRoomPage } from '../../components/add_room';

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

  constructor(private storage: StorageProvider, private restProvider: RestProvider, public navParams: NavParams, public globalVars : GlobalVarsProvider, public navCtrl: NavController, public loadingCtrl : LoadingController, public cd : ChangeDetectorRef, public menu : MenuController, private alert : AlertController, public modalCtrl: ModalController)
  {    
    let loading = this.loadingCtrl.create({
      content: '',
      spinner: 'ios',
      cssClass: 'my-loading-class'
    });
    loading.present();
    menu.enable(true);
    this.initializePage(0);
    loading.dismiss();
  }

  initializePage(count: number){
    if(count < 5){
      this.storage.getUser().then((aUser) => {
        this.username = aUser.username;
        this.password = aUser.password;
        this.token = aUser.token;
        //this.getRooms();
      }).catch((err => {
        this.initializePage(count++);
      }));
    }
    else{
      this.presentAlert('Info', 'Sorry an error has occured!');
    }
  }

  getRooms(){
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
  }

  goToRoomPage(room_id: string, name: string) {
    room_id = room_id || "";
    this.navCtrl.push(RoomPage, {
      room_id: room_id, roomName: name
    });
  }

  openMenu() {
    this.menu.open();
  }

  presentAlert(title : string, message: string): void {
		let alert = this.alert.create({
			title:  title,
			message: message,
			buttons: ['Ok']
		});
		alert.present();
  }

  addRoomModal() {
    let contactModal = this.modalCtrl.create(AddRoomPage);
    contactModal.present();
  }
}

