import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';

import { SearchHeroComponent } from './pages/search-hero/search-hero.component';
import { ListHeroesComponent } from './pages/list-heroes/list-heroes.component';
import { AddHeroComponent } from './pages/add-hero/add-hero.component';
import { HeroesRoutingModule } from './heroes-routing.module';
import { HomeComponent } from './pages/home/home.component';

@NgModule({
  declarations: [
    AddHeroComponent,
    SearchHeroComponent,
    HomeComponent,
    ListHeroesComponent,
  ],
  imports: [CommonModule, HeroesRoutingModule],
})
export class HeroesModule {}
