import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-header-module',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HeaderComponent {
  public test: string = '';
}