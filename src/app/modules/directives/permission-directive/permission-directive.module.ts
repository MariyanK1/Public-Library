import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PermissionDirective } from './permission.directive';

@NgModule({
  declarations: [PermissionDirective],
  exports: [PermissionDirective],
  imports: [CommonModule],
})
export class PermissionDirectiveModule {}
