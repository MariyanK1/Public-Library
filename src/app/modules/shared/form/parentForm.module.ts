import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFormComponent } from './parent-form/parentForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../button/button.module';
import { BooksComponent } from './books/books.component';
import { AddressComponent } from './address/address.component';
import { ContactsComponent } from './contacts/contacts.component';
import { GeneralInfoComponent } from './general-info/general-info.component';
import { LabelModule } from '../label/label.module';

@NgModule({
  declarations: [
    ParentFormComponent,
    BooksComponent,
    AddressComponent,
    ContactsComponent,
    GeneralInfoComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule, LabelModule],
  exports: [ParentFormComponent],
})
export class FormModule {}
