import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { perfilPageRoutingModule } from './perfil-routing.module';

import { perfilPage } from './perfil.page';
import { SharedModule } from 'src/app/shared/shared.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    perfilPageRoutingModule, 
    SharedModule
  ],
  declarations: [perfilPage]
})
export class perfilPageModule {}
