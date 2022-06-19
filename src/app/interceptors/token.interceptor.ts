import { Injectable } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { AuthService } from '../services/auth.service';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {

  constructor(
    private auth: AuthService
  ) {}

  intercept(request: HttpRequest<any>, next: HttpHandler) {
    const authToken = localStorage.getItem('token') || 'null';
    const insertedToken = request.clone({
      setHeaders: {
        token: authToken
      }
    });
    return next.handle(insertedToken);
  }
}
