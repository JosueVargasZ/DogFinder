import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";

import { DogService } from '../../services/dog.service';
import { searchBreedResponse } from '../../interfaces/dog.models';

@Component({
  selector: 'app-dog',
  templateUrl: './dog.component.html',
  styleUrls: ['./dog.component.css']
})
export class DogComponent implements OnInit {

  dogInfo: searchBreedResponse;

  constructor( private _dogService: DogService,
               private activatedRoute: ActivatedRoute ) {
   }

  ngOnInit(): void {
    
    this.activatedRoute.params.subscribe( params =>{
      
      this._dogService.getBreed( params['id']).subscribe((resp: searchBreedResponse ) =>{
        this.dogInfo = resp;
        console.log( this.dogInfo );
      });
    })
    
  }

}
