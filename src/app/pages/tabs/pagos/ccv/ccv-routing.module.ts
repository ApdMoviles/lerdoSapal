import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ccvPage } from './ccv.page';

const routes: Routes = [
  {
    path: '',
    component: ccvPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ccvPageRoutingModule {}
