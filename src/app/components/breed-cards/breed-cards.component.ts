import { Component, OnInit } from '@angular/core';

import { DogService } from '../../services/dog.service';
import { DogResponse } from '../../interfaces/dog.models';

@Component({
  selector: 'app-breed-cards',
  templateUrl: './breed-cards.component.html',
  styleUrls: ['./breed-cards.component.css']
})
export class BreedCardsComponent implements OnInit {

  images: DogResponse[] =[];
  pageIterator: number = 0;
  loadingBreeds: boolean = false;

  constructor( private _dogService: DogService) { }

  ngOnInit(): void {
    this._dogService.getBreeds(this.pageIterator).subscribe( ( resp:DogResponse[] ) =>{
      this.images = resp;
    })
  }

  moreBreeds(){
    this.loadingBreeds = true;
    this.pageIterator++;
    this._dogService.getBreeds( this.pageIterator ).subscribe( resp =>{
      this.images.push( ...resp );
      this.loadingBreeds = false;
    },() => {
      return;
    });
  }

}
