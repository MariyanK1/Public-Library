import { Component, OnInit, ChangeDetectionStrategy } from '@angular/core';
import { Observable } from 'rxjs';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-users-page',
  templateUrl: './users-page.component.html',
  styleUrls: ['./users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UsersPageComponent implements OnInit {
  public colors = COLORS;
  public hideMales: boolean = false;

  public activateAllUsers: boolean = false;
  public users$!: Observable<User[]>;

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users$ = this.usersService.get();
  }

  switchGender(user: User): void {
    // this.users = [...this.usersService.switchGender(user, this.users)];
  }

  onActivate(user: User): void {
    // this.users = this.usersService.onActivate(user, this.users);
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
