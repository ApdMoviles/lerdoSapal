import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { recuperarPage } from './recuperar.page';
import { AuthPage } from '../auth.page';

const routes: Routes = [
  {
    path: '',
    component: recuperarPage
  },
  {
    path: 'auth',
    component: AuthPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class recuperarPageRoutingModule {}
