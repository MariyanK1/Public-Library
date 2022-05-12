import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FormComponent implements OnInit {
  public clickedUser!: User;

  @Input() isEditable: boolean = false;
  @Input() userEdit!: User;

  @Output() addUserToArray = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  public addUser = this.fb.group({
    name: ['', Validators.required],
    age: ['', Validators.required],
    sex: ['male'],
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

  ngOnInit(): void {
    this.addUser.patchValue(this.userEdit);
  }

  onSubmit(user: User): void {
    this.addUser.reset();
    this.addUserToArray.emit(user);
  }
}
