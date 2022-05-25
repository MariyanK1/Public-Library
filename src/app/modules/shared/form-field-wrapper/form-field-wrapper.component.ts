import { Component, ContentChild, Input } from '@angular/core';
import { FormControl, FormControlName } from '@angular/forms';
import { ERR_DICTIONARY } from 'src/constants';

@Component({
  selector: 'app-form-field-wrapper',
  template: `
    <label for="{{ for }}">{{ content }}</label>
    <ng-content></ng-content>
    <p *ngFor="let error of getControlErrors()" class="err-msg">{{ error }}</p>
  `,
})
export class FormFieldWrapperComponent {
  @Input() content: string = '';
  @Input() for: string = '';
  @ContentChild(FormControlName, { static: true })
  public formControl!: FormControl;

  public getControlErrors() {
    const errors = Object.keys(this.formControl?.errors || {}) || [];

    return errors.map((text: string) => ERR_DICTIONARY[text]);
  }
}
