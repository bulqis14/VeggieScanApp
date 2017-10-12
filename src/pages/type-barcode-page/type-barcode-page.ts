import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {HomePage} from '../../pages/home/home';

@IonicPage()
@Component({
  selector: 'page-type-barcode-page',
  templateUrl: 'type-barcode-page.html',
})
export class TypeBarcodePage {
  keyword:string = "";
  constructor(public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad TypeBarcodePage');
  }

  search(){
    let data = {
      text: this.keyword 
    }
    this.navCtrl.push('Result', { data: data });
  }

  // Route to home
  gohome() {
    this.navCtrl.setRoot(HomePage);
  }

  // Route to InformationPage
  openinfo(){
    this.navCtrl.push("InformationPage");
  }

  // Route to HistoryPage
  openhistory() {
    this.navCtrl.push("HistoryPage");
  }

}
