import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserEditComponent } from './pages/user/user-edit/user-edit.component';
import { UserResolve } from './pages/user.resolve';
import { UserListComponent } from './pages/user/user-list/user-list.component';
import { UserNewComponent } from './pages/user/user-new/user-new.component';
import { UserViewComponent } from './pages/user/user-view/user-view.component';

const routes: Routes = [
  { path: '', redirectTo: 'user', pathMatch: 'full' },
  {
    path: 'user',
    children: [
      { path: '', component: UserListComponent },
      { path: 'new', component: UserNewComponent },
      {
        path: 'view/:id',
        component: UserViewComponent,
        resolve: {
          user: UserResolve,
        },
      },
      {
        path: 'edit/:id',
        component: UserEditComponent,
        resolve: {
          user: UserResolve,
        },
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
