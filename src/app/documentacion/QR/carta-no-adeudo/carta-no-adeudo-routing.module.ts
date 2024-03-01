import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { CartaNoAdeudoPage } from './carta-no-adeudo.page';

const routes: Routes = [
  {
    path: '',
    component: CartaNoAdeudoPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CartaNoAdeudoPageRoutingModule {}
