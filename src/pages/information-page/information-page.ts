import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

//import pages
import {HomePage} from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-information-page',
  templateUrl: 'information-page.html',
})
export class InformationPage {

  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad InformationPage');
  }

  // Route to home
  gohome() {
    this.navCtrl.setRoot(HomePage);
  }

  // Route to HistoryPage
  openhistory() {
    this.navCtrl.push("HistoryPage");
  }
}
