import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';

import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HomeComponent } from './pages/home/home.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'listado',
        component: ListHeroesComponent,
      },
      {
        path: 'agregar',
        component: AddHeroComponent,
      },
      {
        path: 'editar/:id',
        component: AddHeroComponent,
      },
      {
        path: ':id',
        component: SearchHeroComponent,
      },
      {
        path: '**',
        redirectTo: 'listado',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HeroesRoutingModule {}
