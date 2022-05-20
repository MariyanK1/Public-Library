import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CONTACTS_INPUT } from '../../../../../config';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit {
  @Input() userForm!: FormGroup;
  public contacts!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contacts = this.fb.group(CONTACTS_INPUT);
    this.userForm.registerControl('contacts', this.contacts);
  }

  get email(): AbstractControl | null {
    return this.userForm.controls['contacts'].get('email');
  }
}
