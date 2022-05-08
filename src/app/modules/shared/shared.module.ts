import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ButtonModule } from './button/button.module';

@NgModule({
  declarations: [],
  exports: [CommonModule, ButtonModule],
  imports: [CommonModule],
})
export class SharedModule {}
