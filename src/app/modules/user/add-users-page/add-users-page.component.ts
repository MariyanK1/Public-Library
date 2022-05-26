import { Component, ChangeDetectionStrategy } from '@angular/core';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-add-users-page',
  templateUrl: './add-users-page.component.html',
  styleUrls: ['./add-users-page.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUsersPageComponent {
  public showForm: boolean = true;
  public colors = COLORS;
  public users: User[] = [];

  toggleForm() {
    this.showForm = !this.showForm;
  }
  addUser(user: User): void {
    this.users = [...this.users, user];
  }
}
