import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UserserviceService {
  private apiUrl = 'http://localhost:3001/users'
  constructor( private http: HttpClient) { }

  addUser (user): Observable<any> {
    // return this.http.post<any>(this.userUrl, user, httpOptions).pipe(tap((user) => 
    // console.log(`added hero w/ id=${user.id}`)),
    //   catchError(this.handleError<any>('addUser'))
    // );

    return this.http.post(`${this.apiUrl}/addUser`, user)
    .pipe(
      catchError(this.handleError())
    );
  }


  private handleError<T> (operation = 'operation', result?: T) {
    return (error: any): Observable<T> => {
 
      // TODO: send the error to remote logging infrastructure
      console.error(error); // log to console instead
 
      // TODO: better job of transforming error for user consumption
      console.log(`${operation} failed: ${error.message}`);
 
      // Let the app keep running by returning an empty result.
      return of(result as T);
    };
  }
}
