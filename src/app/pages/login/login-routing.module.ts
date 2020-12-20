import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {SignInBoxComponent} from './components/sign-in-box/sign-in-box.component'

const routes: Routes = [

  {
    path:'signInBox',
    component : SignInBoxComponent,
  },
  {
    path: '',
    redirectTo : 'signInBox',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
