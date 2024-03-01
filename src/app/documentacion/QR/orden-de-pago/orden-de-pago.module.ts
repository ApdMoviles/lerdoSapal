import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { OrdenDePagoPageRoutingModule } from './orden-de-pago-routing.module';

import { OrdenDePagoPage } from './orden-de-pago.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    OrdenDePagoPageRoutingModule
  ],
  declarations: [OrdenDePagoPage]
})
export class OrdenDePagoPageModule {}
