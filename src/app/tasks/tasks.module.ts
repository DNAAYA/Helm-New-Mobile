import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TasksPageRoutingModule } from './tasks-routing.module';

import { TasksPage } from './tasks.page';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { SavedTasksComponent } from './saved-tasks/saved-tasks.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TasksPageRoutingModule
  ],
  declarations: [
    TasksPage,
    NewTasksComponent,
    SavedTasksComponent
  ]
})
export class TasksPageModule {}
