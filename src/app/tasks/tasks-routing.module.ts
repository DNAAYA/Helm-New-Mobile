import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { SavedTasksComponent } from './saved-tasks/saved-tasks.component';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: '',
    component: TasksPage,

    children: [
      {
        path: 'new-tasks',
        component: NewTasksComponent
      },
      {
        path: 'saved-tasks',
        component: SavedTasksComponent
      }
    ]
  },
  {
    path: 'task-details',
    loadChildren: () => import('./task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
