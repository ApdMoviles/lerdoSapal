import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { metodosPageRoutingModule } from './metodos-routing.module';

import { metodosPage } from './metodos.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    metodosPageRoutingModule, 
    SharedModule
  ],
  declarations: [metodosPage]
})
export class metodosPageModule {}
