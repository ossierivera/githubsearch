import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { DataService } from './data.service';
import { GithubUserInterface } from '../interfaces/github-user.interface';
import { map, catchError } from 'rxjs/operators';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import 'rxjs/add/observable/empty';
import 'rxjs/add/observable/throw';
import 'rxjs/add/observable/of';
import { Subject } from 'rxjs/Subject';

@Injectable()
export class GithubService {

  private client_id = '58734642fcccc0b9';
  private client_secret = 'a9a435d77b2a5dabda67d8bf3c3208f6b1e57b0d';
  private github_url = 'https://api.github.com';
  private api_version = 'application/vnd.github.v3+json';
  private params = `?client_id=${this.client_id}&client_secret=${this.client_secret}`;
  private newInputSubject = new Subject<any>();

  constructor(private http: HttpClient, private dataService: DataService) {
    console.log('github service init');
  }

  getUser(username: string): Observable<GithubUserInterface> {
    this.dataService.activeUser = username;
    return this.http.get<GithubUserInterface>(`${this.github_url}/users/${username}${this.params}`,
      { headers: { 'Accept': this.api_version } });
  }

  getUsersByUsername(username: string): Observable<Array<GithubUserInterface>> {
    return this.http.get<any>(`${this.github_url}/search/users?q=${username}&type=Users${this.params}`,
      { headers: { 'Accept': this.api_version } })
      .pipe(
        map(result => result.items),
        catchError(this.handleError<GithubUserInterface[]>('getUsersByUsername', []))
      );
  }

  getRepos(username: string): Observable<Array<Object>> {
    return this.http.get<Array<Object>>(`${this.github_url}/users/${username}/repos${this.params}`,
      { headers: { 'Accept': this.api_version } })
      .pipe(
        catchError(this.handleError<Object[]>('getRepos', []))
      );
  }

  getFollowers(username: string): Observable<Array<GithubUserInterface>> {
    return this.http.get<Array<GithubUserInterface>>(`${this.github_url}/users/${username}/followers${this.params}`,
      { headers: { 'Accept': this.api_version } })
      .pipe(
        catchError(this.handleError<GithubUserInterface[]>('getFollowers', []))
      );
  }

  sendNewInputSubject(message: string) {
    this.newInputSubject.next( message );
  }
  getNewInputSubject(): Observable<any> {
      return this.newInputSubject.asObservable();
  }

  private handleError<T> (operation = 'operation', result?: T) {
    return (error: HttpErrorResponse): Observable<T> => {

      // TODO: send the error to remote logging infrastructure
      // console.error(error); // log to console instead

      // TODO: better job of transforming error for user consumption
      console.log(`${operation} status code: ${error.status} failed: ${error.message}`);

      // Let the app keep running by returning an empty result.
      return Observable.of(result as T);
    };
  }

}
