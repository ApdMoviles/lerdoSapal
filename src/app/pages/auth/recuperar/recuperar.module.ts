import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { recuperarPageRoutingModule } from './recuperar-routing.module';

import { recuperarPage } from './recuperar.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    recuperarPageRoutingModule,
    SharedModule
  ],
  declarations: [recuperarPage]
})
export class recuperarPageModule {}
