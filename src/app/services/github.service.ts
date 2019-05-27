import { Injectable, EventEmitter } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DataService } from './data.service';
import { GithubUserInterface } from '../interfaces/github-user.interface';

@Injectable()
export class GithubService {

  private client_id = '58734642fcccc0b9';
  private client_secret = 'a9a435d77b2a5dabda67d8bf3c3208f6b1e57b0d';
  private github_url = 'https://api.github.com';
  private api_version = 'application/vnd.github.v3+json';
  private params = `?client_id=${this.client_id}&client_secret=${this.client_secret}`;
  newInputEvent = new EventEmitter<string>();

  constructor(private http: HttpClient, private dataService: DataService) {
    console.log('github service init');
  }

  getUser(username: string) {
    this.dataService.activeUser = username;
    return this.http.get<GithubUserInterface>(`${this.github_url}/users/${username}${this.params}`,
      { headers: { 'Accept': this.api_version } });
  }

  getUsersByUsername(username: string) {
    return this.http.get<Object>(`${this.github_url}/search/users?q=${username}&type=Users${this.params}`,
      { headers: { 'Accept': this.api_version } });
  }

  getRepos(username: string) {
    return this.http.get<Array<Object>>(`${this.github_url}/users/${username}/repos${this.params}`,
    { headers: { 'Accept': this.api_version } });
  }

  getFollowers(username: string) {
    return this.http.get<Array<GithubUserInterface>>(`${this.github_url}/users/${username}/followers${this.params}`,
    { headers: { 'Accept': this.api_version } });
  }

}
