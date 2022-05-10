import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/interfaces';
import { UsersService } from '../../user/services/users.service';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent {
  public clickedUser!: User;
  @Input() users!: User[];

  @Input() formType: string = 'add-user';
  constructor(private fb: FormBuilder, private uService: UsersService) {}

  public addUser = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    sex: [''],
    contacts: this.fb.group({
      phone: [''],
      email: ['', Validators.required],
    }),
    address: this.fb.group({
      country: [''],
      city: [''],
      street: [''],
      state: [''],
      zipCode: [''],
    }),
    books: this.fb.group({
      bookName: [''],
      author: [''],
    }),
  });

  onSubmit(values: User): void {
    this.users = this.uService.addUser(values, this.users);
    console.log(this.users);
  }
}
