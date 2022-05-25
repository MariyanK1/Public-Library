import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { BOOK_INPUT } from '../../../../../config';

@Component({
  selector: 'app-books',
  templateUrl: './books.component.html',
  styleUrls: ['./books.component.scss'],
})
export class BooksComponent implements OnInit, OnDestroy {
  @Input() userForm!: FormGroup;
  public books!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.books = this.fb.group(BOOK_INPUT);
    this.userForm.registerControl('books', this.books);
  }

  ngOnDestroy(): void {
    this.userForm.removeControl('books');
  }
}
