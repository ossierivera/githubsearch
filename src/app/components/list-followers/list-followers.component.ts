import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-list-followers',
  templateUrl: './list-followers.component.html',
  styleUrls: ['./list-followers.component.scss']
})
export class ListFollowersComponent implements OnInit {

  users: Array<GithubUserInterface>;

  constructor(private githubService : GithubService, private dataService : DataService) { }

  ngOnInit() {
    this.githubService.getFollowers(this.dataService.activeUser).subscribe((users: Array<GithubUserInterface>) => {
      this.users = users;
    });
  }

}
