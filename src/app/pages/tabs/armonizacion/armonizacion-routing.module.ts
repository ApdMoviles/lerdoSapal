import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ArmonizacionPage } from './armonizacionpage';

const routes: Routes = [
  {
    path: '',
    component: ArmonizacionPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ArmonizacionPageRoutingModule {}
