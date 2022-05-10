import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';
import { FormModule } from './form/form.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, ButtonModule, FormModule],
  imports: [CommonModule],
})
export class SharedModule {}
