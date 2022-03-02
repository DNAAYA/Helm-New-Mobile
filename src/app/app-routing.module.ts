import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'tasks',
    pathMatch: 'full'
  },
  {
    path: 'priorities',
    loadChildren: () => import('./priorities/priorities.module').then( m => m.PrioritiesPageModule)
  },
  {
    path: 'sub-priorities/:id',
    loadChildren: () => import('./sub-priorities/sub-priorities.module').then( m => m.SubPrioritiesPageModule)
  },
  {
    path: 'divisions/:type/:subID/:prID',
    loadChildren: () => import('./divisions/divisions.module').then( m => m.DivisionsPageModule)
  },
  {
    path: 'tasks',
    loadChildren: () => import('./tasks/tasks.module').then( m => m.TasksPageModule)
  },
  {
    path: 'task-details/:id',
    loadChildren: () => import('./tasks/task-details/task-details.module').then( m => m.TaskDetailsPageModule)
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'questions/:type/:divId/:subId/:prId',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule),
  },
  {
    path: 'details/:qID',
    loadChildren: () => import('./question-details/question-details.module').then(m => m.QuestionDetailsPageModule)
  },
  {
    path: 'question-details',
    loadChildren: () => import('./question-details/question-details.module').then( m => m.QuestionDetailsPageModule)
  }

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
