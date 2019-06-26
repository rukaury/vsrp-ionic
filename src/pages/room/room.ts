import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import {NavController, NavParams, Navbar, Content, LoadingController } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { Question } from '../../Models/question';
import { QuestionPage } from '../question/question';
import { StorageProvider } from '../../providers/storage/storage';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-room',
  templateUrl: 'room.html',
})
export class RoomPage {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Content) content: Content;
  name : string;
  room_id : string;
  jsonData: any;
  allQuestions: Question[];
  token = '';
  dataRetrieved: boolean;

  constructor(private storage: StorageProvider, private restProvider: RestProvider, public navParams: NavParams, public globalVars : GlobalVarsProvider, public navCtrl: NavController, public loadingCtrl : LoadingController, public cd : ChangeDetectorRef) {
    this.name = navParams.get('roomName');    
    this.room_id = navParams.get('room_id');
    this.storage.getUser().then((val) => {
      this.token = val.token;
      this.getRoomInfo();
    });
  }

  getRoomInfo(){
    let loading = this.loadingCtrl.create({
      content: '',
      spinner: 'ios',
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.restProvider.getRoomInfo(this.token, this.room_id)
      .then(data => {
        this.jsonData = data;
        this.allQuestions = new Array(this.jsonData.questions.length);
        for (let i = 0; i < this.jsonData.questions.length; i++) {
          let question = new Question(this.jsonData.questions[i].uuid, this.jsonData.questions[i].title, this.jsonData.questions[i].text, this.jsonData.questions[i].is_mcq);
          this.allQuestions[i] = question;
        }
        this.dataRetrieved = true;
      });
    loading.dismiss();
  }

  goToQuestionPage(question_id: string, room_id: string) {
    question_id = question_id || "";
    this.navCtrl.push(QuestionPage, {
      question_id: question_id,
      room_id : room_id
    });
  }
}
