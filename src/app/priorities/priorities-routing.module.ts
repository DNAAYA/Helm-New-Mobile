import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrioritiesPage } from './priorities.page';

const routes: Routes = [
  {
    path: '',
    component: PrioritiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrioritiesPageRoutingModule {}
