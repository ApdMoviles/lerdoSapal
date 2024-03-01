import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CancelacionDeServicioPageRoutingModule } from './cancelacion-de-servicio-routing.module';

import { CancelacionDeServicioPage } from './cancelacion-de-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CancelacionDeServicioPageRoutingModule
  ],
  declarations: [CancelacionDeServicioPage]
})
export class CancelacionDeServicioPageModule {}
