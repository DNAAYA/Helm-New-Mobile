import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

 const routes: Routes = [
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
    path: 'sub-priorities/:id/:auditKey',
    loadChildren: () => import('./sub-priorities/sub-priorities.module').then( m => m.SubPrioritiesPageModule)
  },
  {
    path: 'divisions/:type/:subID/:auditKey',
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
    path: 'questions/:type/:divId/:subId/:prId/:auditKey',
    loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule),
  },
  // {
  //   path: 'questions/',
  //   loadChildren: () => import('./questions/questions.module').then( m => m.QuestionsPageModule),
  // },
  {
    path: 'details/:qID/:type/:auditKey',
    loadChildren: () => import('./question-details/question-details.module').then(m => m.QuestionDetailsPageModule)
  }

];
 
@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
