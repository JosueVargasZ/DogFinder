import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";

import { DogService } from '../../services/dog.service';
import { DogResponse } from '../../interfaces/dog.models';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  results: DogResponse[];
  showBreeds: boolean= false;
  resultAnimation:string;


  constructor(private _dogService: DogService,
              private _router: Router) { 
              }
              
  ngOnInit(): void {
    this.resultAnimation = 'animate__animated animate__fadeIn';
  }

  searchBreed( query:string ){
    if(query){
      this._dogService.searchBreed( query ).subscribe((resp: DogResponse[]) =>{
        this.results = resp;
        this.showBreeds = true;
        this.resultAnimation = 'animate__animated animate__fadeIn animate__faster';
      });
    }
    
  }

  hideResults(){
    this.resultAnimation = 'animate__animated animate__fadeOut animate__faster';
    setTimeout(() => {
      this.showBreeds = false;
    }, 400);
  }


  goToDog( id:number ){
    this._router.navigate(['breed/',id.toString()]);
  }

}
