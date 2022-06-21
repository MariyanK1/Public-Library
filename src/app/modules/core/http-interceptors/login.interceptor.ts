import { Injectable } from '@angular/core';

import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpResponse,
} from '@angular/common/http';

import { finalize, tap } from 'rxjs/operators';
import { SnackBarService } from 'src/services/snack-bar-service.service';

@Injectable()
export class LogginInterceptor implements HttpInterceptor {
  constructor(private snackBar: SnackBarService) {}

  intercept(req: HttpRequest<any>, next: HttpHandler) {
    let status: string;

    const SubscribeArguments = {
      next: (next: any) => {
        status = '';
        if (next instanceof HttpResponse) {
          status = 'http request succeeded';
        }
      },
      error: (err: any) => (status = 'http request failed'),
      complfete: finalize(() => {
        let displayMessage = status;

        this.logDetails(displayMessage);
      }),
    };

    return next.handle(req).pipe(tap(SubscribeArguments));
  }

  public logDetails(msg: string): void {
    this.snackBar.setMessage(msg);
    this.snackBar.showSnack(msg);
  }
}
