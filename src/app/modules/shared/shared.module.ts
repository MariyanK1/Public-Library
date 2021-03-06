import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { FormModule } from '../user/add-user-form/add-user-form.module';
import { AuthFormModule } from './auth-form/auth-form.module';
import { SnackbarModule } from './snack-bar/snack-bar.module';

@NgModule({
  declarations: [],
  exports: [
    CommonModule,
    ButtonModule,
    FormModule,
    AuthFormModule,
    SnackbarModule,
  ],
  imports: [CommonModule],
})
export class SharedModule {}
