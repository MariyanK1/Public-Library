import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUsersPageComponent } from './add-users-page.component';
import { FormModule } from '../add-user-form/add-user-form.module';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [{ path: '', component: AddUsersPageComponent }];

@NgModule({
  declarations: [AddUsersPageComponent],
  imports: [CommonModule, FormModule, RouterModule.forChild(routes)],
  exports: [AddUsersPageComponent, RouterModule],
})
export class AddUsersPageModule {}
