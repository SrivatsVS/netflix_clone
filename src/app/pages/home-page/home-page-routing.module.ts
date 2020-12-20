import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { LandingPageComponent} from './component/landing-page/landing-page.component'

const routes: Routes = [

  {
    path:'landingpage',
    component : LandingPageComponent,
    children:[
      {
        path: 'movies',
        loadChildren: () => import('../movies/movies.module').then((m) => m.MoviesModule),
      },
    ]
  },
  {
    path: '',
    redirectTo : 'landingpage',
    pathMatch: 'full',

  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }
