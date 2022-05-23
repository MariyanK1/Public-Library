import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormGroup } from '@angular/forms';
import { GENERAL_INFO_INPUT } from '../../../../../config';

@Component({
  selector: 'app-general-info',
  templateUrl: './general-info.component.html',
  styleUrls: ['./general-info.component.scss'],
})
export class GeneralInfoComponent implements OnInit {
  @Input() userForm!: FormGroup;
  public generalInfo!: FormGroup;

  constructor(private fb: FormBuilder) {}

  ngOnInit(): void {
    this.generalInfo = this.fb.group(GENERAL_INFO_INPUT);

    this.userForm.registerControl('generalInfo', this.generalInfo);
  }

  get sex(): AbstractControl {
    return this.generalInfo.controls['sex'];
  }

  get name(): AbstractControl {
    return this.generalInfo.controls['name'];
  }
}
