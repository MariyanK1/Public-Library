import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { User } from 'src/interfaces';

@Component({
  selector: 'app-header-module',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public showForm: boolean = true;
  @Input() users!: User[];

  toggleForm() {
    this.showForm = !this.showForm;
  }
}
