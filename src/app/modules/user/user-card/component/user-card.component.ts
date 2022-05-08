import {
  Component,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy,
} from '@angular/core';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-user-card',
  templateUrl: './user-card.component.html',
  styleUrls: ['./user-card.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class UserCardComponent {
  @Input() user: User = {
    name: '',
    age: 0,
    gender: true,
    activated: false,
  };
  @Input() hideMales: boolean = false;
  @Output() switchGender = new EventEmitter();
  @Output() activateCard = new EventEmitter();

  onClick(user: User): void {
    this.switchGender.emit(user);
  }

  onActivate(user: User): void {
    this.activateCard.emit(user);
  }
}
