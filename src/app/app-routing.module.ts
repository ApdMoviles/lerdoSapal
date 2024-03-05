import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'tabs/home',
    pathMatch: 'full'
  },
  {
    path: 'auth',
    loadChildren: () => import('./pages/auth/auth.module').then( m => m.AuthPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./pages/tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'documentacion/QR/carta-no-adeudo',
    loadChildren: () => import('./documentacion/QR/carta-no-adeudo/carta-no-adeudo.module').then( m => m.CartaNoAdeudoPageModule)
    
  },
  {
    path: 'documentacion/QR/carta-no-servicio',
    loadChildren: () => import('./documentacion/QR/carta-no-servicio/carta-no-servicio.module').then( m => m.CartaNoServicioPageModule)
  },
  {
    path: 'documentacion/QR/empleado/:CEM_CLAVE',
    loadChildren: () => import('./documentacion/QR/contrato/contrato.module').then( m => m.ContratoPageModule)
  },
  {
    path: 'documentacion/QR/cambio-de-nombre',
    loadChildren: () => import('./documentacion/QR/cambio-de-nombre/cambio-de-nombre.module').then( m => m.CambioDeNombrePageModule)
  },
  {
    path: 'documentacion/QR/cancelacion-de-servicio',
    loadChildren: () => import('./documentacion/QR/cancelacion-de-servicio/cancelacion-de-servicio.module').then( m => m.CancelacionDeServicioPageModule)
  },
  {
    path: 'documentacion/QR/:FOLIO_CLAVE',
    loadChildren: () => import('./documentacion/QR/orden-de-pago/orden-de-pago.module').then( m => m.OrdenDePagoPageModule)
  },
  {
    path: 'documentacion/QR/factibilidad',
    loadChildren: () => import('./documentacion/QR/factibilidad/factibilidad.module').then( m => m.FactibilidadPageModule)
  },
 /*  {
    path: 'documentacion/QR/borron-y-cuenta-nueva',
    loadChildren: () => import('./documentacion/QR/borron-y-cuenta-nueva/borron-y-cuenta-nueva.module').then( m => m.BorronYCuentaNuevaPageModule)
  }, */
  {
    path: 'documentacion/QR/QyS',
    loadChildren: () => import('./documentacion/QR/qy-s/qy-s.module').then( m => m.QySPageModule)
  },
  {
    path: 'documentacion/QR/Ticket',
    loadChildren: () => import('./documentacion/QR/ticket/ticket.module').then( m => m.TicketPageModule)
  },
  {
    path: 'documentacion/QR/recibo-de-pago',
    loadChildren: () => import('./documentacion/QR/recibo-de-pago/recibo-de-pago.module').then( m => m.ReciboDePagoPageModule)
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
