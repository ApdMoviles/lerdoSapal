import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { qrPageRoutingModule } from './qr-routing.module';

import { qrPage } from './qr.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    qrPageRoutingModule, 
    SharedModule
  ],
  declarations: [qrPage]
})
export class qrPageModule {}
