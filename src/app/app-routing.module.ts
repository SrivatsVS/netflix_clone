import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [

{
  path:'',
  redirectTo: 'login',
  pathMatch: 'full'
},
{
  path: 'login',
  loadChildren: () => import('./pages/login/login.module').then((m) => m.LoginModule),
},
{
  path: 'homepage',
  loadChildren: () => import('./pages/home-page/home-page.module').then((m) => m.HomePageModule),
},
{
  path:'movies',
  loadChildren: () => import('./pages/movies/movies.module').then((m) => m.MoviesModule),
},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
