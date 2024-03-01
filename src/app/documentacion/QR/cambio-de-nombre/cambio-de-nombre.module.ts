import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CambioDeNombrePageRoutingModule } from './cambio-de-nombre-routing.module';

import { CambioDeNombrePage } from './cambio-de-nombre.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CambioDeNombrePageRoutingModule
  ],
  declarations: [CambioDeNombrePage]
})
export class CambioDeNombrePageModule {}
