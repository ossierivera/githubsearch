import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
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
import { AppRoutingModule } from './app-routing.module';

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
    BrowserAnimationsModule,
    AppRoutingModule
  ],
  providers: [DataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
