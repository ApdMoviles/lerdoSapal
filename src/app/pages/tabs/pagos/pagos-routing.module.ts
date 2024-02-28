import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PagosPage } from './pagos.page';

const routes: Routes = [
  {
    path: '',
    component: PagosPage
  },
  {
    path: 'ccv',
    loadChildren: () => import('./ccv/ccv.module').then( m => m.ccvPageModule)
  },
  {
    path: 'infopagos',
    loadChildren: () => import('./infopagos/infopagos.module').then( m => m.infopagosPageModule)
  },
  {
    path: 'metodos',
    loadChildren: () => import('./metodos/metodos.module').then( m => m.metodosPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagosPageRoutingModule {}
