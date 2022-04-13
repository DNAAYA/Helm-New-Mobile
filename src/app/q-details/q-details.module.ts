import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QDetailsPageRoutingModule } from './q-details-routing.module';

import { QDetailsPage } from './q-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QDetailsPageRoutingModule
  ],
  declarations: [QDetailsPage]
})
export class QDetailsPageModule {}
