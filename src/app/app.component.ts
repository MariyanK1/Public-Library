import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { User } from 'src/interfaces';
import { UsersService } from './modules/user/services/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public hideMales: boolean = false;
  public activateAllUsers: boolean = false;
  public users: User[] = [];

  constructor(private usersService: UsersService) {}

  ngOnInit(): void {
    this.users = this.usersService.get();
  }

  switchGender(user: User): void {
    this.usersService.switchGender(user, this.users);
  }

  onActivate(user: User): void {
    this.users = this.usersService.onActivate(user, this.users);
  }

  activateUsers(): void {
    this.activateAllUsers = !this.activateAllUsers;

    this.usersService.activateUsers(this.activateAllUsers, this.users);
  }

  onClick(): void {
    this.hideMales = !this.hideMales;
  }
}
