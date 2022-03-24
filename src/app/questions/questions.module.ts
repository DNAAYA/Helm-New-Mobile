import { Input, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';
import { QuestionsPageRoutingModule } from './questions-routing.module';

import { QuestionsPage } from './questions.page';
import { YesNoComponent } from '../questionTypes/yes-no/yes-no.component';
import { YesNoInputComponent } from '../questionTypes/yes-no-input/yes-no-input.component';
import { InputComponent } from '../questionTypes/input/input.component';
import { ReplacePipe } from '../replace.pipe';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionsPageRoutingModule
  ],
  declarations: [
    QuestionsPage, 
    YesNoComponent,
    YesNoInputComponent,
    InputComponent,
    ReplacePipe,
  ],
  exports: [ReplacePipe]
})
export class QuestionsPageModule {}
