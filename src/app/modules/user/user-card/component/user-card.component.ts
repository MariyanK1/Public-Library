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
  public showForm: boolean = false;
  @Input() user!: User;
  @Input() hideMales: boolean = false;
  @Output() switchGender = new EventEmitter();
  @Output() activateCard = new EventEmitter();

  onClick(user: User): void {
    this.switchGender.emit(user);
  }

  toggleForm(): void {
    this.showForm = !this.showForm;
  }

  onActivate(user: User): void {
    this.activateCard.emit(user);
  }
}
