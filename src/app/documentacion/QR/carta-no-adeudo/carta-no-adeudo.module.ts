import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaNoAdeudoPageRoutingModule } from './carta-no-adeudo-routing.module';

import { CartaNoAdeudoPage } from './carta-no-adeudo.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaNoAdeudoPageRoutingModule
  ],
  declarations: [CartaNoAdeudoPage]
})
export class CartaNoAdeudoPageModule {}
