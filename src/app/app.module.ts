import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { GithubService } from './services/github.service';
import { DataService } from './services/data.service';

import { ObjectToArrayPipe } from './pipes/object-to-array.pipe';

import { AppComponent } from './app.component';
import { GithubComponent } from './components/github/github.component';
import { InputSearchComponent } from './components/input-search/input-search.component';
import { ListResultsComponent } from './components/list-results/list-results.component';
import { ListResultsItemComponent } from './components/list-results-item/list-results-item.component';
import { DetailComponent } from './components/detail/detail.component';
import { ListFollowersComponent } from './components/list-followers/list-followers.component';
import { ListReposComponent } from './components/list-repos/list-repos.component';

const appRoutes: Routes = [
  { path: '', component: GithubComponent, data: {depth: 1}},
  { path: 'detail/:username', component: DetailComponent, data: {depth: 2}}
];

@NgModule({
  declarations: [
    AppComponent,
    GithubComponent,
    InputSearchComponent,
    ListResultsComponent,
    ListResultsItemComponent,
    DetailComponent,
    ListFollowersComponent,
    ListReposComponent,
    ObjectToArrayPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot(appRoutes),
    BrowserAnimationsModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
