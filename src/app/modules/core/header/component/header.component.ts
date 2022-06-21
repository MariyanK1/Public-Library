import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable, Subscription } from 'rxjs';
import { User } from 'src/interfaces';
import { ActiveUsersService } from 'src/services/active-users.service';
import { AuthService } from 'src/services/auth.service';
import { UsersService } from 'src/services/users.service';

// no detection strategy we should use behavior subject
@Component({
  selector: 'app-header-module',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent implements OnInit, OnDestroy {
  public counter: BehaviorSubject<number> = new BehaviorSubject(0);
  public isLoggedIn = new BehaviorSubject<boolean>(false);
  private authSubscription!: Subscription;
  private activeUsersSubscription!: Subscription;

  constructor(
    private auth: AuthService,
    private router: Router,
    private activeUsers: ActiveUsersService
  ) {}

  ngOnInit(): void {
    this.isLoggedIn.subscribe();
    this.authSubscription = this.auth.isLoggedIn().subscribe((value) => {
      this.isLoggedIn.next(value);
    });
    this.activeUsersSubscription = this.activeUsers
      .getActiveUsers()
      .subscribe((value) => this.counter.next(value));
  }

  ngOnDestroy(): void {
    this.isLoggedIn.unsubscribe();

    if (this.authSubscription) {
      this.authSubscription.unsubscribe();
    }

    if (this.activeUsersSubscription) {
      this.activeUsersSubscription.unsubscribe();
    }
  }

  onSignOut() {
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }
}
