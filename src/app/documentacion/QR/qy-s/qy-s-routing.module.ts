import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QySPage } from './qy-s.page';

const routes: Routes = [
  {
    path: '',
    component: QySPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QySPageRoutingModule {}
