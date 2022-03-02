import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionDetailsPageRoutingModule } from './question-details-routing.module';

import { QuestionDetailsPage } from './question-details.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionDetailsPageRoutingModule
  ],
  declarations: [QuestionDetailsPage]
})
export class QuestionDetailsPageModule {}
