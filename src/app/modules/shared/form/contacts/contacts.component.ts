import { Component, Input, OnInit } from '@angular/core';
import { FormGroup, FormGroupDirective } from '@angular/forms';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() formGroupName!: string;
  form!: FormGroup;
  constructor(private rootFormGroup: FormGroupDirective) {}

  ngOnInit(): void {
    this.form = this.rootFormGroup.control.get(this.formGroupName) as FormGroup;
  }

  get email() {
    /*

    Here on returning TS gave me this error:

    ***
    Element implicitly has an 'any' type because expression of type '"contacts"' can't be used to index type
    '{ [key: string]: AbstractControl; } | AbstractControl[]'. 
      Property 'contacts' does not exist on type '{ [key: string]: AbstractControl; } | AbstractControl[]'.
    ****

      And in order to fix it I added the following rule to tsconfig.json:
       "suppressImplicitAnyIndexErrors": true,

    
    */
    console.log(this.form.parent?.controls?.['contacts']);

    return this.form.parent?.controls?.['contacts'].get('email');
  }
}
