import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { QDetailsPage } from './q-details.page';

const routes: Routes = [
  {
    path: '',
    component: QDetailsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class QDetailsPageRoutingModule {}
