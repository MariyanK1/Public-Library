import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { User } from 'src/interfaces';
import {
  ADDRESS_INPUT,
  BOOK_INPUT,
  CONTACTS_INPUT,
  GENERAL_INFO_INPUT,
} from './config';

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

  public userForm = this.fb.group({
    general: this.fb.group(GENERAL_INFO_INPUT),
    contacts: this.fb.group(CONTACTS_INPUT),
    address: this.fb.group(ADDRESS_INPUT),
    books: this.fb.group(BOOK_INPUT),
  });

  ngOnInit(): void {
    if (this.userEdit) {
      this.isEditable = true;
      this.userForm.patchValue(this.userEdit);
    }
    this.userForm.controls['general'].statusChanges.subscribe((formGroup) => {
      if (formGroup === 'VALID') {
        this.userForm.controls['address'].enable();
      }
    });
  }

  onSubmit(user: User): void {
    this.userForm.reset();
    this.addUserToArray.emit(user);
  }
}
