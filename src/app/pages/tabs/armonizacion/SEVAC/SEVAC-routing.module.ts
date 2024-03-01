import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SEVACPage } from './SEVACpage';

const routes: Routes = [
  {
    path: '',
    component: SEVACPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SEVACPageRoutingModule {}
