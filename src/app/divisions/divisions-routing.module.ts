import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { DivisionsPage } from './divisions.page';

const routes: Routes = [
  {
    path: '',
    component: DivisionsPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class DivisionsPageRoutingModule {}
