import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { FormModule } from './form/parentForm.module';
import { AuthFormModule } from './auth-form/auth-form.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, ButtonModule, FormModule, AuthFormModule],
  imports: [CommonModule],
})
export class SharedModule {}
