import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [AuthFormComponent],
  exports: [AuthFormComponent],
  imports: [CommonModule, LabelModule, ButtonModule],
})
export class AuthFormModule {}
