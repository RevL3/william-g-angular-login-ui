import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LogInComponent } from './log-in/log-in.component';
import { LoggedInComponent } from './logged-in/logged-in.component';

const routes: Routes = [
  { path: 'logged-in', component: LoggedInComponent},
  { path: '', component: LogInComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
