import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmonizacionPage } from './armonizacionpage';

const routes: Routes = [
  {
    path: '',
    component: ArmonizacionPage
  },
  {
    path: 'sevac',
    loadChildren: () => import('./SEVAC/SEVAC.module').then( m => m.SEVACPageModule)
  },
  {
    path: 'cuentasp',
    loadChildren: () => import('./cuentaspublicas/cuentaspublicas.module').then( m => m.cuentaspublicasPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmonizacionPageRoutingModule {}
