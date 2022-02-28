import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrioritiesPageRoutingModule } from './priorities-routing.module';

import { PrioritiesPage } from './priorities.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrioritiesPageRoutingModule
  ],
  declarations: [PrioritiesPage]
})
export class PrioritiesPageModule {}
