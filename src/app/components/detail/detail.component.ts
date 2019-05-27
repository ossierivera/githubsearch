import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { GithubService } from '../../services/github.service';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.scss'],
  providers: [GithubService]
})
export class DetailComponent implements OnInit {

  user: GithubUserInterface;

  constructor(private activatedRoute: ActivatedRoute, private githubService: GithubService) { }

  ngOnInit() {
    this.getUser(this.activatedRoute.snapshot.params['username']);
  }

  getUser(username: string) {
    this.githubService.getUser(username).subscribe((user: GithubUserInterface) => {
      this.user = user;
    });
  }

}
