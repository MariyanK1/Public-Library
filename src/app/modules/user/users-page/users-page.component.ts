import {
  Component,
  OnInit,
  ChangeDetectionStrategy,
  OnDestroy,
} from '@angular/core';
import { map, Observable, Subscription } from 'rxjs';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';
import { ActiveUsersService } from 'src/services/active-users.service';
import { SnackBarService } from 'src/services/snack-bar-service.service';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit, OnDestroy {
  public colors = COLORS;
  public hideMales: boolean = false;
  private counter!: number;
  public activateAllUsers: boolean = false;
  public users$!: Observable<User[]>;
  public messageSubscription!: Subscription;
  public usersSubscription!: Subscription;
  public activeUsersSubscription!: Subscription;
  public message: string = '';

  constructor(
    private usersService: UsersService,
    private activeUsers: ActiveUsersService,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersService.get();
    this.messageSubscription = this.snackBarService
      .getMessage()
      .subscribe((message) => {
        this.message = message;
      });
  }

  switchGender(user: User): void {
    // this.users = [...this.usersService.switchGender(user, this.users)];
  }

  onActivate(user: User): void {
    this.activeUsersSubscription = this.activeUsers
      .getActiveUsers()
      .subscribe((v) => (this.counter = v));

    this.usersSubscription = this.users$
      .pipe(
        map((value) =>
          value.map((val) => {
            if (val === user) {
              val.activated = !val.activated;
              if (val.activated) {
                this.activeUsers.setActiveUser(this.counter + 1);
                this.snackBarService.setMessage('Card is Activated!');
                this.snackBarService.showSnack('Card is Activated!');
              } else {
                this.snackBarService.setMessage('Card is Deactivated!');
                this.snackBarService.showSnack('Card is Deactivated!');
                this.activeUsers.setActiveUser(this.counter - 1);
              }
              return val;
            }
            return val;
          })
        )
      )
      .subscribe();
  }

  activateUsers(): void {
    this.activateAllUsers = !this.activateAllUsers;

    // this.users = [
    //   ...this.usersService.activateUsers(this.activateAllUsers, this.users),
    // ];
  }

  onClick(): void {
    this.hideMales = !this.hideMales;
  }

  ngOnDestroy(): void {
    if (this.messageSubscription) {
      this.messageSubscription.unsubscribe();
    }

    if (this.usersSubscription) {
      this.usersSubscription.unsubscribe();
    }

    if (this.activeUsersSubscription) {
      this.activeUsersSubscription.unsubscribe();
    }
  }
}
