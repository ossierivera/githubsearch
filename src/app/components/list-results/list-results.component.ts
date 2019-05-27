import { Component, OnInit, OnDestroy } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';
import { GithubUserInterface } from '../../interfaces/github-user.interface';
import { Observable } from 'rxjs/Observable';
import { Subscription } from 'rxjs/Subscription';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.scss']
})
export class ListResultsComponent implements OnInit, OnDestroy {

  users$: Observable<Array<GithubUserInterface>>;
  newInputSubscriptionToSubject$: Subscription;

  constructor(private githubService: GithubService, private router: Router) {
    console.log('list init');
  }

  getUsers(username: string): void {
    this.users$ = this.githubService.getUsersByUsername(username)
      .do(() => console.log('Got users for the list'));
  }

  ngOnInit() {
    this.newInputSubscriptionToSubject$ = this.githubService.getNewInputSubject().subscribe(username => this.getUsers(username) );
  }
  ngOnDestroy(): void {
    this.newInputSubscriptionToSubject$.unsubscribe();
  }

}
