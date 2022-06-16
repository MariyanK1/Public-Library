import {
  ChangeDetectionStrategy,
  Component,
  OnDestroy,
  OnInit,
} from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, map, Observable } from 'rxjs';
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

  constructor(
    private auth: AuthService,
    private router: Router,
    private usersService: UsersService,
    private activeUsers: ActiveUsersService
  ) {}

  ngOnInit(): void {
    this.usersService.get().subscribe();
    this.isLoggedIn.subscribe();
    this.auth.isLoggedIn().subscribe((v) => {
      this.isLoggedIn.next(v);
    });
    this.activeUsers.getActiveUsers().subscribe((v) => this.counter.next(v));
  }

  ngOnDestroy(): void {
    this.isLoggedIn.unsubscribe();
  }

  onSignOut() {
    this.isLoggedIn.next(false);
    this.router.navigateByUrl('/login');
    localStorage.clear();
  }
}
