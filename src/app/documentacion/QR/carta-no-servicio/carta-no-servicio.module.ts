import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { CartaNoServicioPageRoutingModule } from './carta-no-servicio-routing.module';

import { CartaNoServicioPage } from './carta-no-servicio.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    CartaNoServicioPageRoutingModule
  ],
  declarations: [CartaNoServicioPage]
})
export class CartaNoServicioPageModule {}
