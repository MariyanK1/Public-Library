import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './component/user-card.component';
import { UserInfoModule } from '../user-info/user-info.module';
import { ButtonModule } from '../../shared/button/button.module';
import { ParentFormModule } from '../../shared/form/parent-form/parentForm.module';

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  imports: [CommonModule, UserInfoModule, ButtonModule, ParentFormModule],
})
export class UserCardModule {}
