import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Facturacionpage } from './facturacion.page';

const routes: Routes = [
  {
    path: '',
    component: Facturacionpage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class facturacionPageRoutingModule {}
