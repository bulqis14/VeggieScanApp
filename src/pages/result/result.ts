import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ToastController } from 'ionic-angular';


//import firebase database
import { FirebaseListObservable} from 'angularfire2/database';
import { FirebaseServiceProvider } from '../../providers/firebase-service/firebase-service';

//import pages
import {HomePage} from '../../pages/home/home';

//import network
import { Network } from '@ionic-native/network';

@IonicPage()
@Component({
  selector: 'page-result',
  templateUrl: 'result.html',
})
export class Result {
  data: any = this.navParams.get('data');
  product: FirebaseListObservable<any[]>;
  noData: boolean = false;

  constructor(public navCtrl: NavController,
    public toastCtrl: ToastController,
    public network: Network,
    public FbS: FirebaseServiceProvider,
    public navParams: NavParams) {
    if (this.data.text !== '') {
      this.FbS.getProductId(this.data.text).subscribe(res => {
        this.product = this.FbS.getProductId(this.data.text);
        if (res.length !== 0) {
          console.log('ada data')
          this.noData = false;
          let d = {
            text: res[0].text,
            productname: res[0].productname,
            timestamp: Date.now()
          }
          this.FbS.addHistory(d)
        }else {
          console.log("tidak ada data")
          this.noData = true;
        }
      });
    }


// watch network for a disconnect
  let disconnectSubscription = this.network.onDisconnect().subscribe(() => {
  console.log('network was disconnected :-(');
  let toast = this.toastCtrl.create({
    message: 'Network was disconnected!',
    duration: 6000,
    position: 'Bottom'
  });

  toast.present();
});

// watch network for a connection
let connectSubscription = this.network.onConnect().subscribe(() => {
  console.log('network connected!');
  let toast = this.toastCtrl.create({
    message: 'Network connected!',
    duration: 6000,
    position: 'Bottom'
  });

  toast.present();
});
}

  ionViewDidLoad() {
    console.log('ionViewDidLoad Result');
  }

  // Route to home
  gohome() {
    this.navCtrl.setRoot(HomePage);
  }

  // Route to InformationPage
  openinfo() {
    this.navCtrl.push("InformationPage");
  }

  // Route to HistoryPage
  openhistory() {
    this.navCtrl.push("HistoryPage");
  }

}
