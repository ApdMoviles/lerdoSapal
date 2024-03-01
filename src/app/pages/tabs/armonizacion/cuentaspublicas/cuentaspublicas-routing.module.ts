import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { cuentaspublicasPage } from './cuentaspublicaspage';

const routes: Routes = [
  {
    path: '',
    component: cuentaspublicasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class cuentaspublicasPageRoutingModule {}
