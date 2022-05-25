import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { CONTACTS_INPUT } from 'src/config';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.scss'],
})
export class ContactsComponent implements OnInit, OnDestroy {
  @Input() userForm!: FormGroup;
  public contacts!: FormGroup;
  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.contacts = this.fb.group(CONTACTS_INPUT);
    this.userForm.registerControl('contacts', this.contacts);
  }

  get email(): AbstractControl {
    return this.contacts.controls['email'];
  }

  ngOnDestroy(): void {
    this.userForm.removeControl('contacts');
  }
}
