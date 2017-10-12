import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../../pages/home/home';

//import firebase database
import { FirebaseListObservable} from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

@IonicPage()
@Component({
  selector: 'page-history-page',
  templateUrl: 'history-page.html',
})
export class HistoryPage {
  history: FirebaseListObservable<any[]>;
  constructor(public navCtrl: NavController,
    public FbS: FirebaseServiceProvider,
    public navParams: NavParams) {
    this.history = this.FbS.getHistory();
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad HistoryPage');
  }

  // Route to home
  gohome() {
    this.navCtrl.setRoot(HomePage);
  }

  openResult(data){
    this.navCtrl.push('Result', {data:data})
  }

  // Route to InformationPage
  openinfo(){
    this.navCtrl.push("InformationPage");
  }
}
