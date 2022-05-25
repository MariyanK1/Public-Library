import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GENERAL_INFO_INPUT } from 'src/config';

@Component({
  selector: 'app-user-info-form',
  templateUrl: './user-info-form.component.html',
  styleUrls: ['./user-info-form.component.scss'],
})
export class UserInfoFormComponent implements OnInit, OnDestroy {
  @Input() userForm!: FormGroup;
  public userInfoForm!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.userInfoForm = this.fb.group(GENERAL_INFO_INPUT);

    this.userForm.registerControl('userInfoForm', this.userInfoForm);
  }

  get sex(): AbstractControl {
    return this.userInfoForm.controls['sex'];
  }

  get name(): AbstractControl {
    return this.userInfoForm.controls['name'];
  }

  ngOnDestroy(): void {
    this.userForm.removeControl('userInfoForm');
  }
}
