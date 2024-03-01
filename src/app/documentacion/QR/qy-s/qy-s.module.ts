import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QySPageRoutingModule } from './qy-s-routing.module';

import { QySPage } from './qy-s.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QySPageRoutingModule
  ],
  declarations: [QySPage]
})
export class QySPageModule {}
