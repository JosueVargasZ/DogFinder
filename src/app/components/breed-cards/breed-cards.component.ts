import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";


import { DogService } from '../../services/dog.service';
import { DogResponse } from '../../interfaces/dog.models';

@Component({
  selector: 'app-breed-cards',
  templateUrl: './breed-cards.component.html',
  styleUrls: ['./breed-cards.component.css']
})
export class BreedCardsComponent implements OnInit {

  breeds: DogResponse[] =[];
  pageIterator: number = 0;
  loadingBreeds: boolean = false;

  constructor( private _dogService: DogService,
               private _router: Router ) { }

  ngOnInit(): void {
    this._dogService.getBreeds(this.pageIterator).subscribe( ( resp:DogResponse[] ) =>{
      this.breeds = resp;
    })
  }

  moreBreeds(){
    this.loadingBreeds = true;
    this.pageIterator++;
    this._dogService.getBreeds( this.pageIterator ).subscribe( resp =>{
      this.breeds.push( ...resp );
      this.loadingBreeds = false;
    },() => {
      return;
    });
  }

  goToDog( id:number ){
    this._router.navigate(['breed/',id.toString()]);
  }

}
