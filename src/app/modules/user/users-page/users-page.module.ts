import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { ButtonModule } from '../../shared/button/button.module';
import { FormModule } from '../add-user-form/add-user-form.module';
import { UserCardModule } from '../user-card/user-card.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: UsersPageComponent }];

@NgModule({
  declarations: [UsersPageComponent],
  imports: [
    CommonModule,
    ButtonModule,
    FormModule,
    UserCardModule,
    RouterModule.forChild(routes),
  ],
  exports: [UsersPageComponent, RouterModule],
})
export class UsersPageModule {}
