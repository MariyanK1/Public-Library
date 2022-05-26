import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

const routes: Routes = [
  {
    path: 'login',
    loadChildren: () =>
      import('./modules/core/login/login.module').then((m) => m.LoginModule),
  },
  {
    path: 'users',
    loadChildren: () =>
      import('./modules/user/users-page/users-page.module').then(
        (m) => m.UsersPageModule
      ),
    canActivate: [AuthenticationGuard],
  },
  {
    path: 'add-user',
    loadChildren: () =>
      import('./modules/user/add-users-page/add-users-page.module').then(
        (m) => m.AddUsersPageModule
      ),
    canActivate: [AuthenticationGuard],
  },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
