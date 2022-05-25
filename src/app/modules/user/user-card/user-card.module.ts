import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './component/user-card.component';
import { UserInfoModule } from '../user-info/user-info.module';
import { ButtonModule } from '../../shared/button/button.module';
import { FormModule } from '../add-user-form/add-user-form.module';

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  imports: [CommonModule, UserInfoModule, ButtonModule, FormModule],
})
export class UserCardModule {}
