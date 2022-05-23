import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentFormComponent } from './parentForm.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ButtonModule } from '../../button/button.module';
import { BooksComponent } from '../books/books.component';
import { AddressComponent } from '../address/address.component';
import { ContactsComponent } from '../contacts/contacts.component';
import { GeneralInfoComponent } from '../general-info/general-info.component';
import { BookNameComponent } from '../books/book-name/book-name.component';
import { BookAuthorComponent } from '../books/book-author/book-author.component';

@NgModule({
  declarations: [
    ParentFormComponent,
    BooksComponent,
    AddressComponent,
    ContactsComponent,
    GeneralInfoComponent,
    BookNameComponent,
    BookAuthorComponent,
  ],
  imports: [CommonModule, ReactiveFormsModule, ButtonModule],
  exports: [ParentFormComponent],
})
export class FormModule {}
