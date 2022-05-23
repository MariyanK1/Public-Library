import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { VALIDATORS_EMAIL, VALIDATORS_PASSWORD } from 'src/validators';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  public isLogin: boolean = false;

  constructor(private fb: FormBuilder) {}

  public authForm: FormGroup = this.fb.group({
    email: VALIDATORS_EMAIL,
    password: VALIDATORS_PASSWORD,
  });

  ngOnInit(): void {}

  onSubmit(): void {
    console.log('first');
  }
}
