import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, ReplaySubject } from 'rxjs';
import { SnackBarComponent } from 'src/app/modules/shared/snack-bar/snack-bar.component';

@Injectable({
  providedIn: 'root',
})
export class SnackBarService {
  private snackBarMessage = new ReplaySubject<string>(1);
  private snackBarMessage$ = this.snackBarMessage.asObservable();

  constructor(private snackBar: MatSnackBar) {}

  showSnack(message: string): void {
    this.snackBar.openFromComponent(SnackBarComponent, {
      data: {
        message,
      },
      duration: 3000,
    });
  }

  getMessage(): Observable<string> {
    return this.snackBarMessage$;
  }

  setMessage(latestValue: string): void {
    this.snackBarMessage.next(latestValue);
  }
}
