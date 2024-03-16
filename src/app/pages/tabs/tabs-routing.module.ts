import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthGuardService } from '../auth/guards/auth.guards'
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
        loadChildren: () => import('./pagos/pagos.module').then( m => m.PagosPageModule),canActivate: [AuthGuardService],
      },
      {
        path: 'armonizacion',
        loadChildren: () => import('./armonizacion/armonizacion.module').then( m => m.ArmonizacionPageModule)
      },
      {
        path: 'facturacion',
        loadChildren: () => import('./facturacion/facturacion.module').then( m => m.FacturacionPageModule),canActivate: [AuthGuardService],
      },
      {
        path: 'qr',
        loadChildren: () => import('./qr/qr.module').then( m => m.qrPageModule)
      },
      {
        path: 'perfil',
        loadChildren: () => import('./perfil/perfil.module').then( m => m.perfilPageModule),canActivate: [AuthGuardService],
      }
    ]
  },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuardService]
})
export class TabsPageRoutingModule {}
