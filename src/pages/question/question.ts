import { Component, ViewChild, ChangeDetectorRef } from '@angular/core';
import { NavController, NavParams, Navbar, Content, LoadingController, ToastController, AlertController } from 'ionic-angular';
import { GlobalVarsProvider } from '../../providers/global-vars/global-vars';
import { Answer } from '../../Models/answer';
import { StorageProvider } from '../../providers/storage/storage';
import { RestProvider } from '../../providers/rest/rest';

@Component({
  selector: 'page-question',
  templateUrl: 'question.html',
})
export class QuestionPage {
  @ViewChild(Navbar) navBar: Navbar;
  @ViewChild(Content) content: Content;
  title : string;
  text : string;
  is_mcq : boolean;
  allAnswers : Answer[];
  answer_input : string = "";
  answer : string = "";
  token = ';'
  room_id : string;
  question_id : string;
  jsonData: any;
  dataRetrieved : boolean = false;
  show_response : boolean = false;
  disable_answers: boolean = false;

  constructor(private storage: StorageProvider, private restProvider: RestProvider, public navParams: NavParams, public globalVars : GlobalVarsProvider, public navCtrl: NavController, public loadingCtrl : LoadingController, public cd : ChangeDetectorRef, public toastCtrl: ToastController, private alert : AlertController) 
  {
    let loading = this.loadingCtrl.create({
      content: '',
      spinner: 'ios',
      cssClass: 'my-loading-class'
    });
    loading.present();
    this.room_id = navParams.get('room_id');
    this.question_id = navParams.get('question_id');
    this.storage.getUser().then((val) => {
      this.token = val.token;
      this.getQuestionInfo();
    });
    loading.dismiss();
  }

  getQuestionInfo(){
    this.restProvider.getQuestionInfo(this.token, this.room_id, this.question_id)
      .then(data => {
        this.jsonData = data;
        this.title = this.jsonData.title;
        this.text= this.jsonData.text;
        this.is_mcq = this.jsonData.is_mcq;
        if(this.is_mcq){
          this.allAnswers = new Array(this.jsonData.answers.length);
          for (let i = 0; i < this.jsonData.answers.length; i++) {
            let an_answer = new Answer(this.jsonData.answers[i].uuid, this.jsonData.answers[i].text, this.jsonData.answers[i].correct);
            this.answer = an_answer.getIsCorrect() ? an_answer.getText() : this.answer; 
            this.allAnswers[i] = an_answer;
          } 
        }
        this.dataRetrieved = true;
      });
  }

  submitAnswer() {
    if(!this.is_mcq){
      this.presentToast('Question was submited successfully', 5000, 'middle');
      this.navCtrl.pop();
    }
    else if(this.is_mcq && this.answer_input != ""){
      this.show_response = true;
      this.disable_answers = true;
    }
    else{
      this.presentToast('Select an answer', 3000, 'top');
    }
  }

  presentToast(message: string, duration: number, position: string): void {
		let toast = this.toastCtrl.create({
      message: message,
      duration: duration,
      position: position
    });
    toast.present();
    }
}
