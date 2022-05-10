import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './form.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';

@NgModule({
  declarations: [FormComponent],
  imports: [CommonModule, FormsModule, ReactiveFormsModule, ButtonModule],
  exports: [FormComponent],
})
export class FormModule {}
