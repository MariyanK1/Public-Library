import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { LabelModule } from '../label/label.module';
import { ButtonModule } from '../button/button.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [CommonModule, LabelModule, ButtonModule, ReactiveFormsModule],
  exports: [AuthFormComponent],
})
export class AuthFormModule {}
