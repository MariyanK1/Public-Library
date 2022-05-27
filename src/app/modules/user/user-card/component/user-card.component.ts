import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { MALE } from 'src/constants';
import { COLORS } from 'src/enums';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent implements OnChanges {
  public colors = COLORS;
  public showCard: boolean = false;
  @Input() user!: User;
  @Input() hideMales: boolean = false;
  @Output() switchGender = new EventEmitter();
  @Output() activateCard = new EventEmitter();

  onClick(user: User): void {
    this.switchGender.emit(user);
  }

  ngOnChanges(changes: SimpleChanges): void {
    this.showCard =
      changes['hideMales'].currentValue && this.user.userInfoForm.sex === MALE
        ? false
        : true;
  }

  onActivate(user: User): void {
    this.activateCard.emit(user);
  }
}
