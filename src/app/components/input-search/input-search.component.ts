import { Component, OnInit } from '@angular/core';
import { GithubService } from '../../services/github.service';
import * as _ from 'lodash';

@Component({
  selector: 'app-input-search',
  templateUrl: './input-search.component.html',
  styleUrls: ['./input-search.component.scss']
})

export class InputSearchComponent implements OnInit {

  debounceNewInputEvent = _.debounce((username) => this.githubService.sendNewInputSubject(username), 800);

  constructor(private githubService: GithubService) {console.log('input init');
  }
  ngOnInit() {
  }
  onInputChange(username: string) { this.debounceNewInputEvent(username); }
}
