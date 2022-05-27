import { Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';
import { UsersService } from 'src/services/users.service';

@Component({
  selector: 'app-add-users-page',
  templateUrl: './add-users-page.component.html',
  styleUrls: ['./add-users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUsersPageComponent implements OnInit {
  public showForm: boolean = true;
  public colors = COLORS;
  public users: User[] = [];

  constructor(private usersService: UsersService) {}

  toggleForm() {
    this.showForm = !this.showForm;
  }

  ngOnInit(): void {
    this.users = this.usersService.get();
  }

  addUser(user: User): void {
    this.users = [...this.users, user];
    console.log(this.users);
  }
}
