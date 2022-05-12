import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './component/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  exports: [FormComponent],
})
export class FormModule {}
