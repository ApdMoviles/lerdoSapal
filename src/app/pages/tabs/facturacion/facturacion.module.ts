import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { facturacionPageRoutingModule } from './facturacion-routing.module';

import { Facturacionpage } from './facturacion.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    facturacionPageRoutingModule, 
    SharedModule
  ],
  declarations: [Facturacionpage]
})
export class FacturacionPageModule {}
