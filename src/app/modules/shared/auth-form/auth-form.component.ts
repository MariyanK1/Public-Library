import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { VALIDATORS_EMAIL, VALIDATOR_NO_EMPTY_INPUT } from 'src/validators';
import { WhiteListUser } from 'src/interfaces';
import { WhiteListUsersService } from 'src/services/white.list.users.service';
import { AuthService } from 'src/services/auth.service';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
})
export class AuthFormComponent implements OnInit {
  private whiteListUsers: WhiteListUser[] = [];
  public isLoggedIn: boolean = false;
  @Input() type: string = 'login';

  constructor(
    private fb: FormBuilder,
    private usersService: WhiteListUsersService,
    private auth: AuthService
  ) {}

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

  get repeatPassword(): AbstractControl {
    return this.authForm.controls['repeatPassword'];
  }
  ngOnInit(): void {
    this.whiteListUsers = this.usersService.get();
    if (this.type === 'register') {
      this.authForm.addControl(
        'repeatPassword',
        this.fb.control('', VALIDATOR_NO_EMPTY_INPUT)
      );
    }
  }

  onSubmit(user: WhiteListUser): void {
    this.isLoggedIn = this.auth.checkUser(this.usersService.check(user));
  }
}
