import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { COLORS } from 'src/enums';
import { User, WhiteListUser } from 'src/interfaces';
import { UsersService } from 'src/services/users.service';
import { WhiteListUsersService } from 'src/services/white.list.users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent implements OnInit {
  public colors = COLORS;
  public hideMales: boolean = false;
  public showForm: boolean = true;
  public activateAllUsers: boolean = false;
  public users: User[] = [];
  public whiteListUsers: WhiteListUser[] = [];

  constructor(
    private usersService: UsersService,
    private whiteUsersService: WhiteListUsersService
  ) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  addUser(user: User): void {
    this.users = [...this.users, user];
  }

  ngOnInit(): void {
    this.whiteListUsers = this.whiteUsersService.get();
    this.users = this.usersService.get();
  }

  switchGender(user: User): void {
    this.users = [...this.usersService.switchGender(user, this.users)];
  }

  onActivate(user: User): void {
    this.users = this.usersService.onActivate(user, this.users);
  }

  activateUsers(): void {
    this.activateAllUsers = !this.activateAllUsers;

    this.users = [
      ...this.usersService.activateUsers(this.activateAllUsers, this.users),
    ];
  }

  onClick(): void {
    this.hideMales = !this.hideMales;
  }
}
