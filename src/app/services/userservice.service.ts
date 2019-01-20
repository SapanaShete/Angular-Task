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
  private userUrl = 'http://localhost:3001/users'
  constructor( private http: HttpClient) { }
  private extractData(res: Response) {
    let body = res;
    return body || { };
  }
  addUser(user): Observable<any> {
    console.log("in Service",user)
    return this.http.post(this.userUrl+  "/adduser" , user, httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }
  getUsers(): Observable<any> {
    return this.http.get(this.userUrl, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError()));
  }
  deleteUsers(id): Observable<{}> {
    const url = `${this.userUrl}/deleteUser/${id}`;
    return this.http.delete(url, httpOptions)
      .pipe(
        catchError(this.handleError())
      );
  }
  getUser(id): Observable<any> {
    console.log("In serviceid",id)
    const url = `${this.userUrl}/${id}`;
    return this.http.get(url, httpOptions).pipe(
      map(this.extractData),
      catchError(this.handleError()));
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
