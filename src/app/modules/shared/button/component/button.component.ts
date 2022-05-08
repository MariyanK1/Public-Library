import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { COLORS } from 'src/enums';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class ButtonComponent {
  public colors: { [key: string]: any } = COLORS;
  @Input() text: string = '';
  @Input() color: string = '';
}
