import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import { ButtonModule } from '../../shared/button/button.module';
import { FormModule } from '../../shared/form/form.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, ButtonModule, FormModule],
})
export class HeaderModule {}
