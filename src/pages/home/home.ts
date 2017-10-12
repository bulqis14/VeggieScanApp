import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { BarcodeScanner } from '@ionic-native/barcode-scanner';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  data;

  constructor(public navCtrl: NavController,
    private barcodeScanner: BarcodeScanner) {}

  // Route to Result
  openscan() {
    this.barcodeScanner.scan().then((barcodeData) => {
      this.data = barcodeData;
      this.openResult(this.data);

    }, (err) => {
      // An error occurred
    });
  }

  openResult(data) {
    if (!this.data.cancelled) {
      this.navCtrl.push('Result', { data: data });
    }

  }

  // Route to TypeBarcodePage
  openkeypad() {
    this.navCtrl.push("TypeBarcodePage");
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
