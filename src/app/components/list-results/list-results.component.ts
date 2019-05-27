import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { Router } from '@angular/router';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-list-results',
  templateUrl: './list-results.component.html',
  styleUrls: ['./list-results.component.scss']
})
export class ListResultsComponent implements OnInit {

  users: Array<GithubUserInterface>;

  constructor(private githubService: GithubService, private router : Router) {
    console.log('list init');
  }

  getUsers(username : string) { 
    this.githubService.getUsersByUsername(username).subscribe(({items} : any) => { 
      this.users = items;
    });
  }

  ngOnInit() {
    this.githubService.newInputEvent.subscribe((username: string) => { 
      this.getUsers(username);
    });
  }

}
