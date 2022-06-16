import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { map, Observable } from 'rxjs';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';
import { ActiveUsersService } from 'src/services/active-users.service';
import { UsersService } from 'src/services/users.service';
import { SnackBarComponent } from '../../shared/snack-bar/snack-bar.component';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit {
  public colors = COLORS;
  public hideMales: boolean = false;
  private counter!: number;
  public activateAllUsers: boolean = false;
  public users$!: Observable<User[]>;
  public data = 'Opened';

  constructor(
    private usersService: UsersService,
    private activeUsers: ActiveUsersService,
    private snackBar: MatSnackBar
  ) {}

  ngOnInit(): void {
    this.users$ = this.usersService.get();
  }

  switchGender(user: User): void {
    // this.users = [...this.usersService.switchGender(user, this.users)];
  }

  snackBarAction(content: string, action: string) {
    let snack = this.snackBar.open(content, action);
    snack.afterDismissed().subscribe(() => {
      console.log('This will be shown after snackbar disappeared');
    });
    snack.onAction().subscribe(() => {
      console.log('This will be called when snackbar button clicked');
    });
  }

  onActivate(user: User): void {
    this.activeUsers.getActiveUsers().subscribe((v) => (this.counter = v));
    const data = this.users$.pipe(
      map((value) =>
        value.map((v) => {
          if (v === user) {
            v.activated = !v.activated;
            if (v.activated) {
              this.activeUsers.setActiveUser(this.counter + 1);
              this.snackBar.openFromComponent(SnackBarComponent, {
                data: this.data,
                duration: 2000,
              });
            } else {
              this.activeUsers.setActiveUser(this.counter - 1);
            }
            return v;
          }
          return v;
        })
      )
    );

    data.subscribe();
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
}
