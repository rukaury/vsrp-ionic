import { Injectable } from '@angular/core';
import { Storage  } from '@ionic/storage';

/*
  Generated class for the StorageProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/

export interface User {
  username: string,
  password: string,
  token: string
}

const USER = 'user';

@Injectable()
export class StorageProvider {

  constructor(private storage: Storage) {}

  /*
  setToken(token : string) : Promise<any>{
      return this.storage.get(TOKEN).then((val) => {
        if(val && val == token){
          console.log("Token is saved already!");
        }else{
          return this.storage.set(TOKEN, token);
        }
      })
  }

  getToken() : Promise<string>{
    return this.storage.get(TOKEN);
  }
  */

  /*
  addUser(user: User): Promise<any> {
    return this.storage.get(USER).then((aUser: User) => {
      if (aUser) {
        console.log("User is logged in already!");
      } else {
        return this.storage.set(USER, user);
      }
    });
  }
  */

  // Create
  addUser(user: User): Promise<any> {
    return this.storage.get(USER).then((aUser: User) => {
      if (aUser) {
        console.log("User is logged in already!");
      } else {
        return this.storage.set(USER, user);
      }
    });
  }

  // READ
  getUser(): Promise<User> {
    return this.storage.get(USER);
  }

  // UPDATE
  updateToken(token: string): Promise<any> {
    return this.storage.get(USER).then((aUser: User) => {
      if (!aUser) {
        return null;
      } 
      let updatedUser: User = aUser;
      updatedUser.token = token;  
      return this.storage.set(USER, updatedUser);
    });
  }

  // DELETE
  deleteUser(id: number): Promise<User> {
    return this.storage.get(USER).then((aUser: User) => {
      if (!aUser) {
        return null;
      }
      return this.storage.set(USER, null);
    });
  }
}
