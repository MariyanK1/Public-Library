import {
  ChangeDetectionStrategy,
  Component,
  Inject,
  OnInit,
} from '@angular/core';
import {
  MatSnackBarRef,
  MAT_SNACK_BAR_DATA,
} from '@angular/material/snack-bar';
import { Observable } from 'rxjs';
import { SnackBarService } from 'src/services/snack-bar-service.service';

@Component({
  selector: 'app-snack-bar',
  templateUrl: './snack-bar.component.html',
  styleUrls: ['./snack-bar.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class SnackBarComponent implements OnInit {
  public snackBarMessage!: Observable<string>;

  constructor(
    @Inject(MAT_SNACK_BAR_DATA) public data: any,
    public sbRef: MatSnackBarRef<SnackBarComponent>,
    private snackBarService: SnackBarService
  ) {}

  ngOnInit(): void {
    this.snackBarMessage = this.snackBarService.getMessage();
  }
}
