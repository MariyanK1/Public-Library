import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LoginComponent } from './modules/core/login/login.component';
import { RegisterComponent } from './modules/core/register/register.component';
import { UsersPageComponent } from './modules/user/users-page/users-page.component';
import { AuthenticationGuard } from 'src/guards/authentication.guard';

export const routes: Routes = [
  { path: 'login', component: LoginComponent },
  {
    path: 'users',
    component: UsersPageComponent,
    canActivate: [AuthenticationGuard],
  },
  { path: 'register', component: RegisterComponent },
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
