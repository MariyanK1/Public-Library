import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { ParentFormModule } from './form/parent-form/parentForm.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, ButtonModule, ParentFormModule],
  imports: [CommonModule],
})
export class SharedModule {}
