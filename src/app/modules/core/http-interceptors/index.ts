import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { LogginInterceptor } from './login.interceptor';

export const httpInterceptorProviders = [
  { provide: HTTP_INTERCEPTORS, useClass: LogginInterceptor, multi: true },
];
