import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UsersPageComponent } from './users-page.component';
import { ButtonModule } from '../../shared/button/button.module';
import { FormModule } from '../add-user-form/add-user-form.module';
import { UserCardModule } from '../user-card/user-card.module';

@NgModule({
  declarations: [UsersPageComponent],
  imports: [CommonModule, ButtonModule, FormModule, UserCardModule],
  exports: [UsersPageComponent],
})
export class UsersPageModule {}
