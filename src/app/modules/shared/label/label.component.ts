import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label',
  template: `
    <label for="{{ for }}">{{ content }}</label>
    <ng-content></ng-content>
  `,
})
export class LabelComponent {
  @Input() content: string = '';
  @Input() for: string = '';
}
