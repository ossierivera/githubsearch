import { Component, OnInit, Input } from '@angular/core';
import { GithubUserInterface } from '../../interfaces/github-user.interface';

@Component({
  selector: 'app-list-results-item',
  templateUrl: './list-results-item.component.html',
  styleUrls: ['./list-results-item.component.scss']
})
export class ListResultsItemComponent implements OnInit {

  @Input() item: GithubUserInterface;

  constructor() { }

  ngOnInit() {
  }

}