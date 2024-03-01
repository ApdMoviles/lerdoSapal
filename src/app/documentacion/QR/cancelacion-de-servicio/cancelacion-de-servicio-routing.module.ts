import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CancelacionDeServicioPage } from './cancelacion-de-servicio.page';

const routes: Routes = [
  {
    path: '',
    component: CancelacionDeServicioPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CancelacionDeServicioPageRoutingModule {}
