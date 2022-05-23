import { Component } from '@angular/core';

@Component({
  selector: 'app-book-name',
  template: `
    <label for="bookName">Book Name:</label>
    <ng-content></ng-content>
  `,
})
export class BookNameComponent {}
