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
  
    register(username: string, password:string, f_name: string, l_name: string, school_id: string) {
      this.reqOpts = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl + '/auth/register', JSON.stringify({username: username, password: password, first_name: f_name, last_name: l_name, school_id: school_id}), this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        });
      }

  logout(token: string) {
    this.reqOpts = {
        headers: {
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + token
        }
      };
      return new Promise((resolve, reject) => {
        this.http.post(this.apiUrl + '/auth/logout', JSON.stringify({}), this.reqOpts).subscribe(data => {
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
          'Authorization': 'Bearer ' + token
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

    getUsers() {
      this.reqOpts = {
          headers: {
            'Content-Type': 'application/json'
          }
        };
        return new Promise((resolve, reject) => {
          this.http.get(this.apiUrl + '/users', this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        })
      }

  getCourses(school_id: string) {
    this.reqOpts = {
        headers: {
          'Content-Type': 'application/json'
        }
      };
      return new Promise((resolve, reject) => {
        this.http.get(this.apiUrl + '/schools/' + school_id + '/courses', this.reqOpts).subscribe(data => {
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

    addRoom(room_name: string, course_code:string, token: string) {
      this.reqOpts = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        };
        return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl + '/rooms', JSON.stringify({room: {name:room_name, course_code: course_code}}), this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        });
      }

    addQuestion(room_id: string, title :string, text: string, is_mcq: boolean, answers: Array<any>, token: string) {
      this.reqOpts = {
          headers: {
            'Content-Type': 'application/json',
            'Authorization': 'Bearer ' + token
          }
        };
        return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl + '/rooms/' + room_id + '/questions', JSON.stringify({question: {title:title, text: text, is_mcq:is_mcq, answers: answers}}), this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        });
      }
      
      
    associateAnswer(room_id: string, question_id :string, answer_id: string, token: string) {
      this.reqOpts = {
          headers: {
            'Authorization': 'Bearer ' + token
          }
        };
        return new Promise((resolve, reject) => {
          this.http.post(this.apiUrl + '/rooms/' + room_id + '/questions/' + question_id + '/answers/' + answer_id, {}, this.reqOpts).subscribe(data => {
            resolve(data);
          }, err => {
            reject(err);
          });
        });
      }

      inviteUsers(token: string, room_id: string, users: Array<string>) {
        this.reqOpts = {
            headers: {
              'Content-Type': 'application/json',
              'Authorization': 'Bearer ' + token
            }
          };
          return new Promise((resolve, reject) => {
            this.http.post(this.apiUrl + '/rooms/' + room_id + '/invite', JSON.stringify({users:users}), this.reqOpts).subscribe(data => {
              resolve(data);
            }, err => {
              reject(err);
            });
          });
        }
}
