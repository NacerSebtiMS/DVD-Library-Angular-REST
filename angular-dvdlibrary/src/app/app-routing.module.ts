import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: 'edit',
    loadChildren: () => import('./edit/edit.module').then(m => m.EditModule)
  },
  {
    path: 'add',
    loadChildren: () => import('./add/add.module').then(m => m.AddModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: 'detail/:id',
    loadChildren: () => import('./detail/detail.module').then(m => m.DetailModule)
  },
  {
    path: '',
    redirectTo: '',
    pathMatch: 'full'
  }
 ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
