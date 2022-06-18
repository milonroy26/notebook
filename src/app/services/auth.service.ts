import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { server } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private server = server;

  constructor(
    private http: HttpClient,
    private Router: Router
  ) { }

  // User login method
  login(user: {email: string, password: string}): Observable<any> {
    return this.http.post<any>(`${this.server}/auth/login`, user)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  // Is the user logged in? true or false
  loggedIn(){
    return !!localStorage.getItem('token');
  }

  logOut(){
    localStorage.clear();
    this.Router.navigate(['/login']);
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }
}
