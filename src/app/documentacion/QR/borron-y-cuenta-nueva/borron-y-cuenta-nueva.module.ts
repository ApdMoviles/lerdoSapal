import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { BorronYCuentaNuevaPageRoutingModule } from './borron-y-cuenta-nueva-routing.module';

import { BorronYCuentaNuevaPage } from './borron-y-cuenta-nueva.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    BorronYCuentaNuevaPageRoutingModule
  ],
  declarations: [BorronYCuentaNuevaPage]
})
export class BorronYCuentaNuevaPageModule {}
