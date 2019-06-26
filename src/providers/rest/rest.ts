import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import {AlertController} from "ionic-angular";

/*
  Generated class for the RestProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class RestProvider {

  apiUrl = 'https://vsrpapi.herokuapp.com/v1';
  reqOpts: any;

  constructor(public http: HttpClient, public alertCtrl : AlertController) {
    //console.log('Hello RestProvider Provider');
  }

  login(username: string, password:string) {
    this.reqOpts = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + '/auth/login', JSON.stringify({username: username, password: password}), this.reqOpts).subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
      });
    }

  getRooms(token: string) {
    this.reqOpts = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token,
        }
      };
      return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + '/rooms', this.reqOpts).subscribe(data => {
          resolve(data);
        }, err => {
          reject(err);
        });
      })
    }

    getRoomInfo(token: string, room_id: string) {
      this.reqOpts = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token,
          }
        };
        return new Promise((resolve, reject) => {
          this.http.get(this.apiUrl + '/rooms/' + room_id, this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        })
      }

      getQuestionInfo(token: string, room_id: string, question_id: string) {
        this.reqOpts = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token,
            }
          };
          return new Promise((resolve, reject) => {
            this.http.get(this.apiUrl + '/rooms/' + room_id + '/questions/' + question_id, this.reqOpts).subscribe(data => {
              resolve(data);
            }, err => {
              reject(err);
            });
          })
        }


}
