import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormFieldWrapperComponent } from './form-field-wrapper.component';

@NgModule({
  declarations: [FormFieldWrapperComponent],
  exports: [FormFieldWrapperComponent],
  imports: [CommonModule],
})
export class FormFieldWrapperlModule {}
