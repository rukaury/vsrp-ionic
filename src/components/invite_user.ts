import { Component } from '@angular/core';
import { ViewController, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';
import { RoomPage } from '../pages/room/room';
import { GlobalVarsProvider } from '../providers/global-vars/global-vars';

@Component({
    templateUrl: '../pages/home/invite_user.html'
})

export class InviteUserPage {

    users: string[];
    dataRetrieved: boolean;
    disable_submit_btn: boolean = true;
    jsonData: any;
    invites: string = "";

    constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController, private restProvider: RestProvider, private navCtrl: NavController, private navParams: NavParams, private alert : AlertController, public globalVars : GlobalVarsProvider){
        this.dataRetrieved = false;
        let loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
          });
        loading.present();
        this.getUsers();
        loading.dismiss();
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    }

    getUsers(){
        this.restProvider.getUsers().then(data => {
            this.jsonData = data;
            this.users = new Array(this.jsonData.users.length);
            for (let i = 0; i < this.jsonData.users.length; i++) {
                this.users[i] = this.jsonData.users[i];
            }
            this.dataRetrieved = true;
        });
    }

    goToRoomPage(room_id: string, name: string) {
        room_id = room_id || "";
        this.navCtrl.push(RoomPage, {
            room_id: room_id, roomName: name
        });
    }

    disableSubmitBtn(){
        this.disable_submit_btn = (this.invites == "") ? true : false;
    }
}