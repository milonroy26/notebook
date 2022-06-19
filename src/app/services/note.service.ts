import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, Observable, retry, throwError } from 'rxjs';
import { server } from 'src/app/app.config';

@Injectable({
  providedIn: 'root'
})
export class NoteService {

  private server = server;

  constructor(
    private http: HttpClient
  ) { }

  create(note: {title: string, description: string}): Observable<any> {
    return this.http.post<any>(`${this.server}/note/create`, note)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  list(skip: number, limit: number): Observable<any> {
    return this.http.get<any>(`${this.server}/note/list/${skip}/${limit}`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  findOne(noteId: string): Observable<any> {
    return this.http.get<any>(`${this.server}/note/findone/${noteId}`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  delete(noteId: string): Observable<any> {
    return this.http.delete<any>(`${this.server}/note/delete/${noteId}`)
    .pipe(
      retry(1),
      catchError(this.errorHandeller)
    );
  }

  errorHandeller(error: HttpErrorResponse){
    return throwError(error);
  }
}
