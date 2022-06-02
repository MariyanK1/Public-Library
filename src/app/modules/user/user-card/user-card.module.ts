import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserCardComponent } from './component/user-card.component';
import { UserInfoModule } from '../user-info/user-info.module';
import { ButtonModule } from '../../shared/button/button.module';
import { FormModule } from '../add-user-form/add-user-form.module';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { RouterModule } from '@angular/router';
import { PermissionDirectiveModule } from '../../directives/permission-directive/permission-directive.module';
import { TooltipModule } from '../../directives/tooltip/tooltip.module';

@NgModule({
  declarations: [UserCardComponent],
  exports: [UserCardComponent],
  imports: [
    CommonModule,
    UserInfoModule,
    ButtonModule,
    FormModule,
    MatButtonModule,
    MatIconModule,
    RouterModule,
    PermissionDirectiveModule,
    TooltipModule,
  ],
})
export class UserCardModule {}
