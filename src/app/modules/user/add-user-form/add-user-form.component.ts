import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
  OnDestroy,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './add-user-form.component.html',
  styleUrls: ['./add-user-form.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AddUserFormComponent implements OnInit, OnDestroy {
  public clickedUser!: User;
  public colors = COLORS;

  @Input() isEditable: boolean = false;
  @Input() userEdit!: User;

  @Output() addUserToArray = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({});

  ngOnInit(): void {
    if (this.userEdit) {
      console.log(this.userEdit);
      this.isEditable = true;
      this.userForm.patchValue({
        userInfoForm: {
          name: this.userEdit.userInfoForm.name,
        },
      });
    }
  }

  ngOnDestroy(): void {
    this.userForm = this.fb.group({});
  }

  onSubmit(user: User): void {
    this.userForm.reset();
    this.addUserToArray.emit(user);
  }
}
