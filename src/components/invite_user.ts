import { Component } from '@angular/core';
import { ViewController, LoadingController, NavController, NavParams, AlertController, ToastController } from 'ionic-angular';
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
    invites: string[] = [];
    token: string;
    room_id: string;

    constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController, private restProvider: RestProvider, private navCtrl: NavController, private navParams: NavParams, private alert : AlertController, public globalVars : GlobalVarsProvider, public toastCtrl: ToastController){
        this.dataRetrieved = false;
        let loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
          });
        loading.present();
        this.getUsers();
        this.token = navParams.get('token');
        this.room_id = navParams.get('room_id');
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

    public inviteUsers() {
        let loading = this.loadingCtrl.create({
            content: '',
            spinner: 'ios',
            cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.inviteUsers(this.token, this.room_id,this.invites).then(() => {
            this.dataRetrieved = true;
            this.presentToast('Added users successfully!', 4000 ,'top');
            this.dismissModal();
            }).catch((err) => {
                if(err.status == 403){
                    this.presentAlert('Invite users', 'Please contact the room administrator to add users!');
                }
                else{
                    this.presentAlert('Invite users', 'An error has occured, try again!');
                    this.dismissModal();
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

    addUser(username){
        let elem = document.getElementById(username);
        let style = elem.getAttribute('style');
        if(style){
            elem.removeAttribute('style');
            const index: number = this.invites.indexOf(username);
            if (index !== -1) {
                this.invites.splice(index, 1);
            } 
        }
        else{
            elem.setAttribute('style', 'color:#f26e40');
            this.invites.push(username);
        }
        this.disable_submit_btn = this.invites.length == 0 ? true : false;
    }

    presentToast(message: string, duration: number, position: string): void {
        let toast = this.toastCtrl.create({
            message: message,
            duration: duration,
            position: position
        });
        toast.present();
    }

    presentAlert(title : string, message: string): void {
		let alert = this.alert.create({
			title:  title,
			message: message,
			buttons: [
                {
                    text: 'Ok',
                    role: 'cancel',
                    cssClass : 'alert-submit-btn'
                }
            ]
		});
		alert.present();
    }
}