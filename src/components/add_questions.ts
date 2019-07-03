import { Component } from '@angular/core';
import { ViewController, LoadingController, NavController, NavParams, AlertController } from 'ionic-angular';
import { RestProvider } from '../providers/rest/rest';
import { RoomPage } from '../pages/room/room';

@Component({
    templateUrl: '../pages/question/add-question.html'
})

export class AddQuestionPage {

    room_id: string;
    room_name: string;
    title : string;
    text : string;
    is_mcq : string;
    answers : Array<any>;
    num_of_answers: string = 'select';
    dataRetrieved: boolean;
    token: string;
    show_button : boolean = false;
    show_select_num : boolean = false;
    disable_submit_btn : boolean = true;

    constructor(public loadingCtrl: LoadingController, public viewCtrl: ViewController, private restProvider: RestProvider, private navCtrl: NavController, private navParams: NavParams, private alertCtrl: AlertController){
        this.token = navParams.get('token');
        this.room_id = navParams.get('room_id');
        this.room_name = navParams.get('room_name');
        this.answers = [];
    }

    dismissModal() {
        // using the injected ModalController this page
        // can "dismiss" itself and optionally pass back data
        this.viewCtrl.dismiss({
            'dismissed': true
        });
    }

    public addQuestion() {
        let loading = this.loadingCtrl.create({
          content: '',
          spinner: 'ios',
          cssClass: 'my-loading-class'
        });
        loading.present();
        this.restProvider.addQuestion(this.room_id, this.title, this.text, (this.is_mcq == "Yes" ? true : false), this.answers, this.token).then(data => {
            let jsonData : any = data;
            let room_id : string = jsonData.room.room_id;
            this.dataRetrieved = true;
            this.goToRoomPage(room_id, this.room_name);
          }).catch((err) => {
              console.log(err);
          });
        loading.dismiss();
      }

    goToRoomPage(room_id: string, name: string) {
        room_id = room_id || "";
        this.navCtrl.push(RoomPage, {
            room_id: room_id, roomName: name
        });
    }

    onQuestionTypeClick(val : string){
        this.show_select_num = (val == "Yes") ? true : false;
        this.disable_submit_btn = true;
        if(!(val == "Yes")){
            this.show_button = false;
            this.answers = [];
            this.disable_submit_btn = false;
        }
    }

    onSelectNumOfAnswers(val : string){
        this.show_button = (val == "Yes" && !(this.num_of_answers == "select")) ? true : false;
    }

    addAnswersPrompt(){
        let inputs : Array<any> = [];

        for(let i = 1; i <= +this.num_of_answers; i++){
            let answer = {name: "ans_" + i, placeholder: i + ". " + (i == 1 ? "First answer..." : (i == 2 ? "Second answer..." : (i == 3 ? "Third answer" : (i == 4 ? "Fourth answer" : "Fifth answer"))))}
            inputs[i-1] = answer;
        }

        const prompt = this.alertCtrl.create({
            title: 'Answers',
            message: "Add your MCQ answers",
            inputs: inputs,
            cssClass: 'buttonCss',
            buttons: [
                {
                    text: 'Cancel',
                    handler: data => {
                    console.log('Cancel clicked');
                    }
                },
                {
                    text: 'Add',
                    handler: data => {
                        for(let i = 1; i <= inputs.length; i++){
                            this.answers.push({text: (i == 1 ? data.ans_1 : (i == 2 ? data.ans_2 : (i == 3 ? data.ans_3 : (i == 4 ? data.ans_4 : data.ans_5)))), correct:false})
                        }
                    }
                }
            ]
        });
        prompt.present();
    }

    selectAnswer(num: number){
        let elems = document.getElementsByClassName('orange-text');
        if(elems.length > 0){
            for(let i=0; i < elems.length; i++){
                elems.item(i).removeAttribute('class');
                this.answers[i].correct = false;
            }
        }
        this.answers[num].correct = true;
        document.getElementById('answer_' + (num + 1)).setAttribute('class', 'orange-text');
        this.disable_submit_btn = false;
    }
}