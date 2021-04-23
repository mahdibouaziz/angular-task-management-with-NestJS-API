import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LocalStorageService } from './local-storage.service';

@Injectable()
export class UniversalAppInterceptor implements HttpInterceptor {
  constructor(private localStorageService: LocalStorageService) {}

  intercept(
    request: HttpRequest<unknown>,
    next: HttpHandler
  ): Observable<HttpEvent<unknown>> {
    const accessToken = this.localStorageService.get('accessToken');
    request = request.clone({
      url: request.url,
      setHeaders: {
        Authorization: `Bearer ${accessToken}`,
      },
    });
    return next.handle(request);
  }
}
