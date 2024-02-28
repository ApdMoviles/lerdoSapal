import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SignUpPage } from './sign-up.page';
import { AuthPage } from '../auth.page';

const routes: Routes = [
  {
    path: '',
    component: SignUpPage
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
export class SignUpPageRoutingModule {}
