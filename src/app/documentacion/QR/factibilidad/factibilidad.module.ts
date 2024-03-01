import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { FactibilidadPageRoutingModule } from './factibilidad-routing.module';

import { FactibilidadPage } from './factibilidad.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    FactibilidadPageRoutingModule
  ],
  declarations: [FactibilidadPage]
})
export class FactibilidadPageModule {}
