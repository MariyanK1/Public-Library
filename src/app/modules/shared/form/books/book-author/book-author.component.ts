import { Component } from '@angular/core';

@Component({
  selector: 'app-book-author',
  template: `
    <label for="author">Author:</label>
    <ng-content></ng-content>
  `,
})
export class BookAuthorComponent {}
