import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ccvPageRoutingModule } from './ccv-routing.module';

import { ccvPage } from './ccv.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ccvPageRoutingModule, 
    SharedModule
  ],
  declarations: [ccvPage]
})
export class ccvPageModule {}
