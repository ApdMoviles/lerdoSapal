import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { infopagosPage } from './infopagos.page';
import { PagosPage } from '../pagos.page';

const routes: Routes = [
  {
    path: '',
    component: infopagosPage
  },
  {
    path: 'pagos',
    component: PagosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class infopagosPageRoutingModule {}
