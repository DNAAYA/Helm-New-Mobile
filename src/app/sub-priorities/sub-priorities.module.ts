import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { SubPrioritiesPageRoutingModule } from './sub-priorities-routing.module';

import { SubPrioritiesPage } from './sub-priorities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    SubPrioritiesPageRoutingModule
  ],
  declarations: [SubPrioritiesPage]
})
export class SubPrioritiesPageModule {}
