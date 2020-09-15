import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchComponent } from './components/search/search.component';
import { HomeComponent } from './components/home/home.component';
import { SliderComponent } from './components/slider/slider.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { BreedCardsComponent } from './components/breed-cards/breed-cards.component';
import { FooterComponent } from './components/footer/footer.component';
import { DogComponent } from './components/dog/dog.component';
import { CategoriesComponent } from './components/categories/categories.component';
import { BreedsComponent } from './components/breeds/breeds.component';

@NgModule({
  declarations: [
    AppComponent,
    SearchComponent,
    HomeComponent,
    SliderComponent,
    NavbarComponent,
    BreedCardsComponent,
    FooterComponent,
    DogComponent,
    CategoriesComponent,
    BreedsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
