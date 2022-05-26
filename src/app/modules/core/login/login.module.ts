import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login.component';
import { AuthFormModule } from '../../shared/auth-form/auth-form.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent,
  },
];

@NgModule({
  declarations: [LoginComponent],
  exports: [LoginComponent, RouterModule],
  imports: [CommonModule, AuthFormModule, RouterModule.forChild(routes)],
})
export class LoginModule {}
