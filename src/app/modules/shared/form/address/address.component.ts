import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ADDRESS_INPUT } from '../../../../../config';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit {
  @Input() userForm!: FormGroup;
  public address!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.address = this.fb.group(ADDRESS_INPUT);
    this.userForm.registerControl('address', this.address);

    this.userForm.controls['generalInfo'].status === 'INVALID'
      ? this.userForm.controls['address']?.disable()
      : this.userForm.controls['address']?.enable();

    this.userForm.controls['generalInfo'].statusChanges.subscribe((status) => {
      status === 'INVALID'
        ? this.userForm.controls['address']?.disable()
        : this.userForm.controls['address']?.enable();
    });
  }
}
