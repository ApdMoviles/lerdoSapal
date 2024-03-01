import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CambioDeNombrePage } from './cambio-de-nombre.page';

const routes: Routes = [
  {
    path: '',
    component: CambioDeNombrePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CambioDeNombrePageRoutingModule {}
