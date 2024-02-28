import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      {
        path: 'home',
        loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
      },
      {
        path: 'pagos',
        loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule)
      },
      {
        path: 'armonizacion',
        loadChildren: () => import('./armonizacion/armonizacion.module').then( m => m.ArmonizacionPageModule)
      },
      {
        path: 'facturacion',
        loadChildren: () => import('./facturacion/facturacion.module').then( m => m.FacturacionPageModule)
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then( m => m.qrPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.perfilPageModule)
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}
