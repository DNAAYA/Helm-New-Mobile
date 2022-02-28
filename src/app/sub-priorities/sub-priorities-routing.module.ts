import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { SubPrioritiesPage } from './sub-priorities.page';

const routes: Routes = [
  {
    path: '',
    component: SubPrioritiesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class SubPrioritiesPageRoutingModule {}
