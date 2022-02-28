import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { DivisionsPageRoutingModule } from './divisions-routing.module';

import { DivisionsPage } from './divisions.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    DivisionsPageRoutingModule
  ],
  declarations: [DivisionsPage]
})
export class DivisionsPageModule {}
