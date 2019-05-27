import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import { DataService } from '../../services/data.service';

@Component({
  selector: 'app-list-repos',
  templateUrl: './list-repos.component.html',
  styleUrls: ['./list-repos.component.scss']
})
export class ListReposComponent implements OnInit {

  repos: Object;

  constructor(private githubService: GithubService, private dataService: DataService) { }

  ngOnInit() {
    this.githubService.getRepos(this.dataService.activeUser).subscribe((repos: Array<Object>) => {
      this.repos = repos;
    });
  }

}
