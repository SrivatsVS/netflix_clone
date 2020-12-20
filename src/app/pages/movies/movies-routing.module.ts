import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MoviesComponent} from './components/movies/movies.component';
const routes: Routes = [
      
      {
        path:'',
        redirectTo: 'movies',
        
      },
      {
        path:'movies',
        component: MoviesComponent,
      }

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MoviesRoutingModule { }
