import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { cuentaspublicasPageRoutingModule } from './cuentaspublicas-routing.module';

import { cuentaspublicasPage } from './cuentaspublicaspage';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    cuentaspublicasPageRoutingModule, 
    SharedModule
  ],
  declarations: [cuentaspublicasPage]
})
export class cuentaspublicasPageModule {}
