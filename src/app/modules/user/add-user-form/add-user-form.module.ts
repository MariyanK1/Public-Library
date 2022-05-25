import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AddUserFormComponent } from './add-user-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../shared/button/button.module';
import { BooksComponent } from '../../shared/form/books/books.component';
import { AddressComponent } from '../../shared/form/address/address.component';
import { ContactsComponent } from '../../shared/form/contacts/contacts.component';
import { UserInfoFormComponent } from '../user-info-form/user-info-form.component';
import { FormFieldWrapperlModule } from '../../shared/form-field-wrapper/form-field-wrapper.module';

@NgModule({
  declarations: [
    AddUserFormComponent,
    BooksComponent,
    AddressComponent,
    ContactsComponent,
    UserInfoFormComponent,
  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    ButtonModule,
    FormFieldWrapperlModule,
  ],
  exports: [AddUserFormComponent],
})
export class FormModule {}
