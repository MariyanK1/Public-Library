import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './component/header.component';
import { ButtonModule } from '../../shared/button/button.module';

@NgModule({
  declarations: [HeaderComponent],
  exports: [HeaderComponent],
  imports: [CommonModule, ButtonModule],
})
export class HeaderModule {}
