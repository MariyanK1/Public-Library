import {
  ChangeDetectionStrategy,
  Component,
  Input,
  Output,
  EventEmitter,
  OnInit,
} from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-form',
  templateUrl: './parentForm.component.html',
  styleUrls: ['./parentForm.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ParentFormComponent implements OnInit {
  public clickedUser!: User;
  public colors = COLORS;

  @Input() isEditable: boolean = false;
  @Input() userEdit!: User;

  @Output() addUserToArray = new EventEmitter();
  constructor(private fb: FormBuilder) {}

  public userForm = this.fb.group({});

  ngOnInit(): void {
    if (this.userEdit) {
      this.isEditable = true;
      this.userForm.patchValue(this.userEdit);
    }
  }

  onSubmit(user: User): void {
    this.userForm.reset();
    this.addUserToArray.emit(user);
  }
}
