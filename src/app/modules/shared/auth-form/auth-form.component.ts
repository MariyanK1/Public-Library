import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder } from '@angular/forms';
import { VALIDATORS_EMAIL, VALIDATOR_NO_EMPTY_INPUT } from 'src/validators';
import { WhiteListUser } from 'src/interfaces';
import { WhiteListUsersService } from 'src/services/white.list.users.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';

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
    private auth: AuthService,
    private router: Router
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
  }

  onSubmit(): void {
    this.isLoggedIn = this.auth.checkUser(
      this.usersService.check(this.authForm.value)
    );
    if (this.isLoggedIn) {
      this.router.navigate(['users']);
    }
  }
}
