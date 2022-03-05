import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { NewTasksComponent } from './new-tasks/new-tasks.component';
import { SavedTasksComponent } from './saved-tasks/saved-tasks.component';

import { TasksPage } from './tasks.page';

const routes: Routes = [
  {
    path: 'tasks',
    component: TasksPage,
    children: [
      {
        path: 'new_tasks',
        children: [
          {
            path: '',
            component: NewTasksComponent
          }
        ]
      },
      {
        path: 'saved_tasks',
        children: [
          {
            path: '',
            component: SavedTasksComponent
          }
        ]
      },
      {
        path: '',
        redirectTo: '/tasks/new_tasks',
        pathMatch: 'full'
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tasks/tasks/new_tasks',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TasksPageRoutingModule {}
