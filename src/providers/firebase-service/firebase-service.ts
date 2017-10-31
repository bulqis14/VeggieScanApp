import { AngularFireDatabase } from 'angularfire2/database';
import { Injectable } from '@angular/core';
// import { Http } from '@angular/http';
// import 'rxjs/add/operator/map';

@Injectable()
export class FirebaseServiceProvider {

  constructor(public afd: AngularFireDatabase) {
}

    getProductId(id){
      return this.afd.list('/Productlist', {
        query: {
          orderByChild: "text",
          equalTo: id
        }
      })

    }

    addHistory(data){
      this.afd.list('/history').push(data);
    }

    getHistory(){
      return this.afd.list('/history', {
        query: {
          orderByChild: 'timestamp',
          limitToLast: 5
        }
      })
    }
  }
