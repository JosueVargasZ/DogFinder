import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HomeComponent } from './components/home/home.component';
import { DogComponent } from './components/dog/dog.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BreedsComponent } from './components/breeds/breeds.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'breeds', component: BreedsComponent},
  {path: 'categories', component: CategoriesComponent},
  {path: 'breed/:id', component: DogComponent},
  {path: '**', pathMatch: 'full', redirectTo: 'home'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
