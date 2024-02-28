import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { infopagosPageRoutingModule } from './infopagos-routing.module';

import { infopagosPage } from './infopagos.page';
import { SharedModule } from 'src/app/shared/shared.module';
import { ConsumosService } from 'src/app/services/consumos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    infopagosPageRoutingModule, 
    SharedModule,
  ],
  declarations: [infopagosPage]
})
export class infopagosPageModule {}
