import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserInfoComponent } from './component/user-info.component';
import { MaleFemalePipe } from '../../pipes/maleFemale.pipe';

@NgModule({
  declarations: [UserInfoComponent, MaleFemalePipe],
  exports: [UserInfoComponent],
  imports: [CommonModule],
})
export class UserInfoModule {}
