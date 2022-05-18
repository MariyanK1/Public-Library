import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormComponent } from './component/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { BooksComponent } from './books/books.component';
import { AddressComponent } from './address/address.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GeneralComponent } from './general/general.component';

@NgModule({
  declarations: [FormComponent, BooksComponent, AddressComponent, ContactsComponent, GeneralComponent],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  exports: [FormComponent],
})
export class FormModule {}
