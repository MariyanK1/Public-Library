import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { VALIDATORS_EMAIL, VALIDATOR_NO_EMPTY_INPUT } from 'src/validators';
import { WhiteListUsers } from 'src/interfaces';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  @Input() type: string = 'login';

  constructor(private fb: FormBuilder) {}

  public authForm = this.fb.group({
    email: ['', VALIDATORS_EMAIL],
    password: ['', VALIDATOR_NO_EMPTY_INPUT],
  });

  get email(): AbstractControl {
    return this.authForm.controls['email'];
  }

  get password(): AbstractControl {
    return this.authForm.controls['password'];
  }
  ngOnInit(): void {
    if (this.type === 'register') {
      this.authForm.addControl(
        'repeatPassword',
        this.fb.group({
          repeatPassword: ['', VALIDATOR_NO_EMPTY_INPUT],
        })
      );
    }
  }

  onSubmit(values: WhiteListUsers): void {
    console.log(values);
  }
}
