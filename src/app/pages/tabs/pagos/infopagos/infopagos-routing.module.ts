import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { infopagosPage } from './infopagos.page';
import { PagosPage } from '../pagos.page';
import { metodosPage } from '../metodos/metodos.page';

const routes: Routes = [
  {
    path: '',
    component: infopagosPage
  },
  {
    path: 'pagos',
    component: PagosPage
  },
  {
    path: 'metodos',
    component: metodosPage
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class infopagosPageRoutingModule {}
