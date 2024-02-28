import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ArmonizacionPageRoutingModule } from './armonizacion-routing.module';

import { ArmonizacionPage } from './armonizacionpage';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ArmonizacionPageRoutingModule, 
    SharedModule
  ],
  declarations: [ArmonizacionPage]
})
export class ArmonizacionPageModule {}
