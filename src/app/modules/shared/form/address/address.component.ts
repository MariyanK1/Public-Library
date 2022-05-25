import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { ADDRESS_INPUT } from 'src/config';

@Component({
  selector: 'app-address',
  templateUrl: './address.component.html',
  styleUrls: ['./address.component.scss'],
})
export class AddressComponent implements OnInit, OnDestroy {
  @Input() userForm!: FormGroup;
  public address!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.address = this.fb.group(ADDRESS_INPUT);
    this.userForm.registerControl('address', this.address);

    this.userForm.controls['userInfoForm'].status === 'INVALID'
      ? this.userForm.controls['address']?.disable()
      : this.userForm.controls['address']?.enable();

    this.userForm.controls['userInfoForm'].statusChanges.subscribe((status) => {
      status === 'INVALID'
        ? this.userForm.controls['address']?.disable()
        : this.userForm.controls['address']?.enable();
    });
  }

  ngOnDestroy(): void {
    this.userForm.removeControl('address');
  }
}
