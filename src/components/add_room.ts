import { Component } from '@angular/core';
import { ViewController, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';
import { RoomPage } from '../pages/room/room';

@Component({
    templateUrl: '../pages/home/add_room.html'
})

export class AddRoomPage {

    room_name: string = "";
    course : string = "";
    dataRetrieved: boolean;
    token: string;
    disable_submit_btn: boolean = true;

    constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController, private restProvider: RestProvider, private navCtrl: NavController, private navParams: NavParams, private alert : AlertController){
        this.token = navParams.get('token');
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    }

    public addRoom() {
        if(this.room_name == "" || this.course == ""){
            this.presentAlert('Add Room', "Some room information are missing!")
            return;
        }
        let loading = this.loadingCtrl.create({
          content: '',
          spinner: 'ios',
          cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.addRoom(this.room_name, this.course, this.token).then(data => {
            let jsonData : any = data;
            let room_id : string = jsonData.room.room_id;
            this.dataRetrieved = true;
            this.goToRoomPage(room_id, this.room_name);
          }).catch((err) => {
              console.log("Error!");
          });
        loading.dismiss();
      }

    goToRoomPage(room_id: string, name: string) {
        room_id = room_id || "";
        this.navCtrl.push(RoomPage, {
            room_id: room_id, roomName: name
        });
    }

    disableSubmitBtn(){
        this.disable_submit_btn = (this.room_name == "" || this.course == "") ? true : false;
    }

    presentAlert(title : string, message: string): void {
		let alert = this.alert.create({
			title:  title,
			message: message,
			buttons: ['Ok']
		});
		alert.present();
    }
}