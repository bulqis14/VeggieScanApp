import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TypeBarcodePage } from './type-barcode-page';

@NgModule({
  declarations: [
    TypeBarcodePage,
  ],
  imports: [
    IonicPageModule.forChild(TypeBarcodePage),
  ],
  exports: [
    TypeBarcodePage
  ]
})
export class TypeBarcodePageModule {}
