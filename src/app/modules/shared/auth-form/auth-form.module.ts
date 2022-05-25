import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthFormComponent } from './auth-form.component';
import { FormFieldWrapperlModule } from '../form-field-wrapper/form-field-wrapper.module';
import { ButtonModule } from '../button/button.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [AuthFormComponent],
  imports: [
    CommonModule,
    FormFieldWrapperlModule,
    ButtonModule,
    ReactiveFormsModule,
  ],
  exports: [AuthFormComponent],
})
export class AuthFormModule {}
