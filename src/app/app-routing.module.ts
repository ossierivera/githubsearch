import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GithubComponent } from './components/github/github.component';
import { DetailComponent } from './components/detail/detail.component';


const appRoutes: Routes = [
  { path: '', component: GithubComponent, data: {depth: 1}},
  { path: 'detail/:username', component: DetailComponent, data: {depth: 2}}
];

@NgModule({
  imports: [RouterModule.forRoot(appRoutes)],
  exports : [RouterModule]
})
export class AppRoutingModule { }
