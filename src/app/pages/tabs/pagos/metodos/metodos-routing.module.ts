import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { metodosPage } from './metodos.page';

const routes: Routes = [
  {
    path: '',
    component: metodosPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class metodosPageRoutingModule {}
