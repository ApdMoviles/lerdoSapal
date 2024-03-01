import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { FactibilidadPage } from './factibilidad.page';

const routes: Routes = [
  {
    path: '',
    component: FactibilidadPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class FactibilidadPageRoutingModule {}
