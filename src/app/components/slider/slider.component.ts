import { Component, OnInit, Input } from '@angular/core';
import { Router } from "@angular/router";

import { DogService } from '../../services/dog.service';
import { DogResponse } from '../../interfaces/dog.models';


@Component({
  selector: 'app-slider',
  templateUrl: './slider.component.html',
  styleUrls: ['./slider.component.css']
})
export class SliderComponent implements OnInit {

  @Input() categories:string;

  sliderJump    :number = 4;
  sliderPosition:number;
  sliderStop    :number;
  category   :DogResponse[] =[]; 

  constructor( private _dogService: DogService,
               private _router: Router ) {
    this.sliderPosition = 0;
    this.sliderStop = this.sliderJump;
   }

  ngOnInit(): void {
    this._dogService.getCategories(this.categories).subscribe( ( resp: DogResponse[] ) =>{
      this.category.push( ...resp );
    });
  }

  prev(){
    if(this.sliderPosition === 0){
      return;
    }
    this.sliderPosition--;
    this.sliderStop = this.sliderPosition + this.sliderJump;
  }


  next(){
    if( (this.sliderPosition + this.sliderJump) === this.category.length ){
      return;
    }
    this.sliderPosition++;
    this.sliderStop = this.sliderPosition + this.sliderJump;
  }

  goToDog( id:number ){
    this._router.navigate(['breed/',id.toString()]);
  }

}
