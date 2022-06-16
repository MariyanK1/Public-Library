import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
} from '@angular/core';
import { AbstractControl, FormBuilder, Validators } from '@angular/forms';
import {
  VALIDATORS_EMAIL,
  VALIDATORS_ONLY_LETTERS,
  VALIDATOR_NO_EMPTY_INPUT,
} from 'src/validators';
import { WhiteListUser } from 'src/interfaces';
import { WhiteListUsersService } from 'src/services/white.list.users.service';
import { AuthService } from 'src/services/auth.service';
import { Router } from '@angular/router';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrls: ['./auth-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthFormComponent implements OnInit {
  private isLoggedIn = new BehaviorSubject<boolean>(false);
  @Input() type: string = 'login';

  constructor(
    private fb: FormBuilder,
    private usersService: WhiteListUsersService,
    private router: Router,
    private auth: AuthService
  ) {}

  public authForm = this.fb.group({
    username: ['', Validators.required],
  });

  ngOnInit(): void {
    this.auth.isLoggedIn().subscribe((v) => this.isLoggedIn.next(v));
  }

  onSubmit(): void {
    const subscriber = {
      next: (v: any) => {
        this.auth.setUser(true);
        this.isLoggedIn.next(true);
      },
      error: (e: any) => this.auth.setUser(false),
      complete: () => {
        this.auth.setUser(true);
        this.isLoggedIn.next(true);
        this.router.navigate(['users']);
      },
    };
    this.usersService
      .checkUserExist(this.authForm.value.username)
      .subscribe(subscriber);
  }
}
