import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { perfilPage } from './perfil.page';

const routes: Routes = [
  {
    path: '',
    component: perfilPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class perfilPageRoutingModule {}
