import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { qrPage } from './qr.page';

const routes: Routes = [
  {
    path: '',
    component: qrPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class qrPageRoutingModule {}
